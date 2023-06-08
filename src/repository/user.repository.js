const { pool } = require('../db');

async function getAllUsersDB() {
  const client = await pool.connect();
  const sql = 'select * from users';
  const data = (await client.query(sql)).rows;
  return data;
}

async function getUserByIdDB(id) {
  const client = await pool.connect();
  const sql = 'select * from users where id = $1';
  const data = (await client.query(sql, [id])).rows;
  return data;
}

async function createUsersDB(name, surname, email, pwd) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    const sql = 'insert into users (name, surname, email, pwd) values ($1, $2, $3, $4)  returning *';
    const data = (await client.query(sql, [name, surname, email, pwd])).rows;

    await client.query('COMMIT');

    return data;
  } catch (error) {
    await client.query('ROLLBACK');
    console.log(`createUsersDB: ${error.message}`);
    return [];
  }
}

async function updateUsersDB(id, name, surname, email, pwd) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    const sql = 'update users set name = $1, surname = $2, email = $3, pwd = $4 where id = $5 returning *';
    const data = (await client.query(sql, [name, surname, email, pwd, id])).rows;

    await client.query('COMMIT');

    return data;
  } catch (error) {
    await client.query('ROLLBACK');
    console.log(`updateUsersDB: ${error.message}`);
    return [];
  }
}

async function deleteUserByIdDB(id) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    const sql = 'delete from users where id = $1';
    const data = (await client.query(sql, [id])).rows;

    await client.query('COMMIT');

    return data;
  } catch (error) {
    await client.query('ROLLBACK');
    console.log(`deleteUserByIdDB: ${error.message}`);
    return [];
  }
}

async function PatchDataDB(id, clientData) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    const sql = 'select * from users where id = $1';
    const result1 = (await client.query(sql, [id])).rows;

    const newData = {
      ...result1[0],
      ...clientData
    };

    const sqlNew = 'update users set name = $1, surname = $2, email = $3, pwd = $4 where id = $5 returning *';
    const result2 = (await client.query(sqlNew, [newData.name, newData.surname, newData.email, newData.pwd, id])).rows;

    await client.query('COMMIT');

    return result2;
  } catch (error) {
    await client.query('ROLLBACK');
    console.log(`PatchDataDB: ${error.message}`);
    return [];
  }
}

module.exports = { getAllUsersDB, getUserByIdDB, createUsersDB, updateUsersDB, deleteUserByIdDB, PatchDataDB };
