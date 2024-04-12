const database = require('../service/Database');

module.exports = (tableName) => ({
    read: async () => await database.readAll(tableName),
})