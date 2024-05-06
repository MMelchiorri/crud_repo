const mysql = require('mysql2/promise')

class Database {
  constructor(db_host, db_port, db_user, db_password, db_name) {
    this.options = {
      host: db_host,
      user: db_user,
      database: db_name,
      password: db_password,
      waitForConnections: true,
      connectionLimit: 10,
    }
  }

  readAll = async (tableName) => {
    const conn = await mysql.createConnection(this.options)
    const result = await conn.query(`SELECT * FROM ${tableName}`)
    await conn.end()
    return result
  }

  readByEmail = async (tableName, email) => {
    const pool = await mysql.createPool(this.options)
    const conn = await pool.getConnection()
    const sql = `SELECT * FROM ${tableName} WHERE ${tableName}.email = ?`
    const [result, fields] = await conn.query(sql, email)
    pool.releaseConnection(conn)
    return result
  }

  insert = async (tableName, values) => {
    const pool = await mysql.createPool(this.options)
    const conn = await pool.getConnection()
    const sql = `INSERT INTO ${tableName} (${Object.keys(values).join(', ')}) VALUES (${Object.keys(
      values,
    )
      .map(() => '?')
      .join(', ')})`
    const sqlValues = Object.values(values)
    const [result] = await conn.query(sql, sqlValues)
    pool.releaseConnection(conn)
    return result
  }

  update = async (tableName, values) => {
    const pool = await mysql.createPool(this.options)
    const conn = await pool.getConnection()
    const sql = `UPDATE ${tableName} SET ${Object.entries(values)
      .map(([key, value]) => `${key} = ?`)
      .join(', ')} WHERE ${tableName}.email = ?`
    const [result, fields] = await conn.query(sql, [
      ...Object.values(values),
      values?.email,
    ])
    pool.releaseConnection(conn)
    return result
  }

  deleteAll = async (tableName) => {}

  deleteUser = async (tableName, email) => {}
}

const singletonInstance = new Database(
  process.env.DB_HOST,
  process.env.DB_PORT,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  process.env.DB_NAME,
)

module.exports = Object.freeze(singletonInstance)
