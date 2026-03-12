import postgres from 'postgres';
import { Technology } from "@/app/lib/definitions";

// Fetch all technologies data on the server side
export async function fetchAllTechs(): Promise<Technology[]> {
  "use server"; // correct directive for a server action

    const sql = postgres(
      process.env.DATABASE_URL!,
      { ssl: 'require' }
    );

    // run the query and return typed rows from the DB
    const res: any[] = await sql `SELECT * FROM technologies ORDER BY id`;
    if (res.length === 0) {
      return [];
    }

  // Map all rows to the Technology type; columns are flat in the table
  const technologies: Technology[] = res.map((row: any) => ({
      id: row.id,
      name: row.name,
      image_url: row.image_url,
      image_alt: row.image_alt,
      description: row.description,
      width: row.width,
      height: row.height,
    }));

  return technologies;
}