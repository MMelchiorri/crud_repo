module.exports = (entityName) => (req, res, next) => {
  req.entity = entityName
  next()
}
