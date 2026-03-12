// import bcrypt from 'bcrypt.ts';
import postgres from 'postgres';
import { technologies, clubs } from '@/app/lib/placeholder-data';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require'});

async function seedTechnologies() {
    await sql`
        CREATE TABLE IF NOT EXISTS technologies (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            description TEXT NOT NULL,
            image_url VARCHAR(255) NOT NULL,
            image_alt VARCHAR(255) NOT NULL,
            width INT NOT NULL,
            height INT NOT NULL
        );
    `; 


    const insertedTechnologies = await Promise.all(
        technologies.map(
            (tech) => sql`
                INSERT INTO technologies (id, name, description, image_url, image_alt, width, height)
                VALUES (${tech.id}, ${tech.name}, ${tech.description}, ${tech.image_url}, ${tech.image_alt}, ${tech.width}, ${tech.height})
                ON CONFLICT (id) DO NOTHING;
            `,
        ),
    );
    return insertedTechnologies
}

async function seedClubs() {
    await sql`
        CREATE TABLE IF NOT EXISTS clubs (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            description TEXT NOT NULL,
            logo_url VARCHAR(255) NOT NULL,
            logo_alt VARCHAR(255) NOT NULL
        );
    `;

    const insertedClubs = await Promise.all(
        clubs.map(
            (club) => sql`
                INSERT INTO clubs (id, name, description, logo_url, logo_alt)
                VALUES (${club.id}, ${club.name}, ${club.description}, ${club.logo_url}, ${club.logo_alt})
                ON CONFLICT (id) DO NOTHING;
            `,
        ),
    );
    return insertedClubs
}

export async function GET(): Promise<Response> {
    try {
        const result = await sql.begin ((sgl) => [
            seedTechnologies(),
            seedClubs(),
        ]);

        return Response.json({ message: 'Database seeded successfully'});
    } catch (error) {
        return Response.json({ error }, { status: 500});
    }
}