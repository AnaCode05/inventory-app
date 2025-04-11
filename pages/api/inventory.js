// pages/api/inventory.js

import { Pool } from 'pg';

// Create a new pool instance using the DATABASE_URL environment variable
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default async function handler(req, res) {
  // Retrieve the list of items
  if (req.method === 'GET') {
    try {
      // Query all items from your inventory table (adjust table name/columns as needed)
      const result = await pool.query('SELECT * FROM a4_inventory ORDER BY id');
      res.status(200).json(result.rows);
    } catch (error) {
      console.error('Error fetching inventory items:', error);
      res.status(500).json({ error: 'Failed to fetch inventory items' });
    }
  } 
  // Add a new item to the inventory
  else if (req.method === 'POST') {
    try {
      const { name, category, quantity, price } = req.body;
      // Simple validation; you might want to improve this
      if (!name || !category || quantity === undefined || price === undefined) {
        res.status(400).json({ error: 'Missing required fields' });
        return;
      }
      // Insert the new item and return the newly created record
      const result = await pool.query(
        `INSERT INTO a4_inventory (name, category, quantity, price)
         VALUES ($1, $2, $3, $4) RETURNING *`,
        [name, category, quantity, price]
      );
      res.status(200).json(result.rows[0]);
    } catch (error) {
      console.error('Error adding inventory item:', error);
      res.status(500).json({ error: 'Failed to add inventory item' });
    }
  } 
  else {
    // Handle unsupported methods
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
