const { Pool } = require('pg');

const createUserTable = async (db) => {
  await db.query(`CREATE TABLE IF NOT EXISTS users(
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,  
  auth0Id TEXT NOT NULL,
  name TEXT,
  email TEXT NOT NULL,
  city TEXT,
  country TEXT,
  address TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
  )`);
};

const createProductTable = async (db) => {
  await db.query(`CREATE TABLE IF NOT EXISTS products(
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name TEXT NOT NULL,
    city TEXT NOT NULL,
    cuisine TEXT[] NOT NULL,
    menu_items JSONB NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
    )`);
};

const main = async () => {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URI,
  });
  const db = await pool.connect();

  await createUserTable(db);
  await createProductTable(db);

  db.release();
};

main()
  .then(() => console.log('Tables created successfully 🎉'))
  .catch((error) => {
    console.log('Error occurred while creating tables= ', error);
    process.exit(1);
  });
