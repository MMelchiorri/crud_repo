const db = require('../database/rest')

exports.read = async (req, res) => {
    res.send({value : await db('user').read()});
}