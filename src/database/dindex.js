import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pkg;

const client = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

//client.query('CREATE TABLE players (player_id SERIAL PRIMARY KEY, name VARCHAR(255), position VARCHAR(255),clubname VARCHAR(255), avatar VARCHAR(255))');

// client.query('SELECT table_schema, table_name FROM information_schema.tables;', (err, res) => {
//   if(err) throw err;
//   for (let row of res.rows) {
//     console.log(JSON.stringify(row));
//   }
// })


client.on('connect', () => console.log('Database connected successfully'));

client.on('error', (err) => console.log(`Error: ${err}`));

export default client;
