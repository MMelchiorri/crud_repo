const db = require('../database/rest')

exports.read = async (req, res) => {
    res.send({ value : await db('user').read() });
}

exports.readByEmail = async (req, res) => {
    res.send({ value: await db('user').readByEmail(req.params.email) });
}

exports.insert = async (req, res) => {
    res.send({ value: await db('user').insert(req.body) });
}

exports.update = async (req, res) => {
    res.send({ value: await db('user').update(req.body) })
}