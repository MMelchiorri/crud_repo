const mysql = require('mysql2/promise')

class Database {
    constructor(db_host, db_port, db_user, db_password, db_name) {
        this.db_host = db_host;
        this.db_port = db_port;
        this.db_user = db_user;
        this.db_password = db_password;
        this.db_name = db_name;
    }

    options = {
        host: this.db_host,
        port: this.db_port,
        user: this.db_user,
        password: this.db_password,
        database: this.db_name
    }

    createConnection = async () => {
        return await mysql.createConnection(this.options);
    }

    readAll = async (tableName) => {
        const conn = await this.createConnection();
        const result = await conn.query(`SELECT * FROM ${tableName}`);
        await conn.end();
        return result;

    }


}

const singletonInstance = new Database();

module.exports = Object.freeze(singletonInstance);