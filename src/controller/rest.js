const db = require('../database/rest')

exports.read = async (req, res) => {
    await db('user').read();
}