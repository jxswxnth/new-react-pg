const { Pool } = require('pg');
const pool = new Pool({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'customer',
  password: 'jxswxnth',
  port: 5432,
});

const insertData = async () => {
  try {
    const client = await pool.connect();
    for (let i = 1; i <= 50; i++) {
      await client.query(
        `INSERT INTO customer  (sno, customer_name, age, phone, location, created_at) VALUES (${i}, 'Customer ${i}', ${Math.floor(
          Math.random() * 50
        ) + 20}, '1234567890', 'Location ${i}', NOW())`
      );
    }
    console.log('Data inserted successfully!');
    client.release();
    process.exit(0);
  } catch (error) {
    console.error('Error inserting data:', error);
    process.exit(1);
  }
};

const getData = async () => {
  try {
    const client = await pool.connect();

    const data = await client.query(
      `select * from customer`
    );

    client.release();
    return data.rows;
  } catch (error) {
    console.error('Error inserting data:', error);
  }
};


module.exports = { insertData, getData };