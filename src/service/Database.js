class Database {

}

const singletonInstance = new Database();

module.exports = Object.freeze(singletonInstance);