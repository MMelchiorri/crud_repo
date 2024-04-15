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
        const pool = await mysql.createPool(this.options);
        const conn = await pool.getConnection();
        const [result, fields] = await conn.query(`SELECT * FROM ${tableName}`);
        await pool.releaseConnection(conn);
        return result;
    }

    readByEmail = async (tableName, email) => {
         const pool = await mysql.createPool(this.options);
         const conn = await pool.getConnection();
         const [result, fields] = await conn.query(`SELECT * FROM ${tableName} where ${tableName}.email='${email}'`);
        await pool.releaseConnection(conn);
        return result;
    }

    insert = async (tableName, values) => {
        const pool = await mysql.createPool(this.options);
        const conn = await pool.getConnection();
        console.log(`INSERT INTO ${tableName} columns (?) values (?)`, values);
        const [result, fields] = await conn.query(`INSERT INTO ${tableName} columns (?) values (?)`, values);
        await pool.releaseConnection(conn);
        return result;
    }

    update = async (tableName, email) => {

    }

    deleteAll = async (tableName) => {

    }

    deleteUser = async (tableName, email) => {

    }
}

const singletonInstance = new Database(process.env.DB_HOST, process.env.DB_PORT, process.env.DB_USER, process.env.DB_PASSWORD, process.env.DB_NAME);

module.exports = Object.freeze(singletonInstance);