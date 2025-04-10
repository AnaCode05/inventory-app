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