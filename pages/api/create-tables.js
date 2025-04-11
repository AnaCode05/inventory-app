// pages/api/create-tables.js
import { createTables } from './db';

export default async function handler(req, res) {
  await createTables(req, res);
}
