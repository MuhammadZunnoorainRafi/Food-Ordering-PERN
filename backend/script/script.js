import { Pool } from 'pg';

const main = async () => {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URI,
  });
  const db = await pool.connect();

  db.release();
};

main()
  .then(() => console.log('Tables created successfully 🎉'))
  .catch((error) =>
    console.log('Error occurred while creating tables= ', error)
  );
