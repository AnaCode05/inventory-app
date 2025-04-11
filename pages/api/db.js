import { Pool } from 'pg';

// Create a new pool instance using the DATABASE_URL environment variable
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default async function handler(req, res) {
  try {
    // Example query to check the connection
    const result = await pool.query('SELECT NOW()');
    res.status(200).json({ message: 'Connected to Neon.Tech', time: result.rows[0].now });
  } catch (error) {
    console.error('Database connection error:', error);
    res.status(500).json({ error: 'Database connection error' });
  }
}

export async function createTables(req, res) {
  try {
    // Drop tables if they exist (drop ledger first because it might depend on the inventory table)
    await pool.query(`DROP TABLE IF EXISTS a4_ledger;`);
    await pool.query(`DROP TABLE IF EXISTS a4_inventory;`);

    // Create the inventory table
    await pool.query(`
      CREATE TABLE a4_inventory (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        category VARCHAR(50) NOT NULL,
        quantity INTEGER NOT NULL CHECK (quantity >= 0),
        price DECIMAL(10,2) NOT NULL CHECK (price >= 0),
        date_added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // Create the ledger table
    await pool.query(`
      CREATE TABLE a4_ledger (
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

    // Insert sample data into the inventory table
    const sampleResult = await pool.query(`
      INSERT INTO a4_inventory (name, category, quantity, price)
      VALUES
         ('Item A', 'Category 1', 10, 19.99),
         ('Item B', 'Category 2', 5, 9.99),
         ('Item C', 'Category 1', 20, 4.99)
      RETURNING *;
    `);

    res.status(200).json({
      message: 'Tables created, sample data inserted, and any existing tables dropped.',
      sampleData: sampleResult.rows
    });
  } catch (error) {
    console.error('Error creating DB tables:', error);
    res.status(500).json({ error: 'Database tables error', details: error.message });
  }
}
