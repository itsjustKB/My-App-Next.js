import { pool } from "./db";
import postgres from 'postgres';
import { Technology, Club} from "@/app/lib/definitions"

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function getTechnologies() {
  const data = await pool.query(
    "SELECT * FROM technologies"
  );

  return data.rows; // rows now include description column if present
}

export async function getTechnologyById(id: string) {
  const data = await pool.query(
    "SELECT * FROM technologies WHERE id = $1",
    [id]
  );
  return data.rows[0];
}

export type Technology = {
  id: string;
  name: string;
  description: string;
};