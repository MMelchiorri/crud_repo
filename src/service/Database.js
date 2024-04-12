const mysql = require('mysql2/promise')

class Database {

    constructor(db_host, db_port, db_user, db_password, db_name) {
        this.options = {
            host: db_host,
            port: db_port,
            user: db_user,
            password: db_password,
            database: db_name
        }
    }

    readAll = async (tableName) => {
        const conn = await mysql.createConnection(this.options);
        const result = await conn.query(`SELECT * FROM ${tableName}`);
        await conn.end();
        return result;
    }
}

const singletonInstance = new Database(process.env.DB_HOST, process.env.DB_PORT, process.env.DB_USER, process.env.DB_PASSWORD, process.env.DB_NAME);

module.exports = Object.freeze(singletonInstance);