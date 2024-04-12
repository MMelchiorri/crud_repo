const database = require('../service/Database');

module.exports = (tableName) => ({
    read: async () => database.readAll(tableName),

})