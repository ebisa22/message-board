import {Client} from 'pg';

const main=async()=>{
    const database_url=process.argv[2] || process.env.DATABASE_URL;
     if (!database_url) {
       throw new Error("database url missing");
     }
    const client = new Client({
      connectionString: database_url,
      ...(database_url.includes("render.com") && {
        ssl: { rejectUnauthorized: false },
      }),
    });
   
 const SQL = `
     CREATE TABLE IF NOT EXISTS messages (
         id VARCHAR(255) PRIMARY KEY,
         username VARCHAR(255),
         text VARCHAR(255),
         added TIMESTAMPTZ
     );

     INSERT INTO messages (id, username, text, added) VALUES
     ('a1b2c3d4-e5f6-7a8b-9c0d-e1f2a3b4c5d6', 'Amando', 'Hi there!', NOW()),
     ('f9e8d7c6-b5a4-3928-10f9-e8d7c6b5a432', 'Charles', 'Hello World!', NOW()),
     ('3c4b5a69-87fe-dcba-0987-654321fedcba', 'Alice', 'How is everyone doing?', NOW());
    `;
    try{
        console.log('seeding...')
        await client.connect();
        await client.query(SQL);
        await client.end();
        console.log("done");

    }catch(error){
          console.error(error);
          throw error;
    }

}

main();