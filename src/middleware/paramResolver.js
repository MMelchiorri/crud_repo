module.exports = async (req, res, next, value, name) => {
  req[name] = value
  next()
}
