const database = require('../service/Database')

module.exports = (tableName) => ({
  read: async () => database.readAll(tableName),
  readByEmail: async (email) => database.readByEmail(tableName, email),
  insert: async (values) => database.insert(tableName, values),
})
