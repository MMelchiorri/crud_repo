const db = require('../database/rest')

exports.read = async (req, res) => {
  res.send({ value: await db(req.entity).read() })
}

exports.readByEmail = async (req, res) => {
  res.send({ value: await db(req.entity).readByEmail(req[req.entity]) })
}

exports.insert = async (req, res) => {
  res.send({ value: await db(req.entity).insert(req.body) })
}

exports.update = async (req, res) => {
  res.send({ value: await db(req.entity).update(req.body) })
}
