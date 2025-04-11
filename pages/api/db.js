import { Pool } from 'pg';
require('dotenv').config();  // Make sure .env is in your project root

// Create a new pool instance using the DATABASE_URL environment variable
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

async function createTables(req, res) {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS a4_inventory (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        category VARCHAR(50) NOT NULL,
        quantity INTEGER NOT NULL CHECK (quantity >= 0),
        price DECIMAL(10,2) NOT NULL CHECK (price >= 0),
        date_added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS a4_ledger (
        id SERIAL PRIMARY KEY,
        operation_type VARCHAR(10) NOT NULL CHECK (operation_type IN ('INSERT', 'UPDATE', 'DELETE')),
        item_name VARCHAR(100) NOT NULL,
        category VARCHAR(50),
        previous_quantity INTEGER,
        new_quantity INTEGER,
        previous_price DECIMAL(10,2),
        new_price DECIMAL(10,2),
        timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('Tables created successfully.');
  } catch (error) {
    console.error('Error creating tables:', error);
    res.status(500).json({ error: 'Database tables error' });
  } finally {
    await pool.end();
  }
}

createTables();