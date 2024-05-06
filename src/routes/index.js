const router = require('express').Router()
const paramResolver = require('../middleware/paramResolver')
const requestEntity = require('../middleware/requestEntity')

const routes = [...require('./userRoutes')]
const setEntities = new Set(
  Object.keys(routes).map((key) => {
    const { entity } = routes[key].options
    return entity
  }),
)

setEntities.forEach((entity) => {
  router.param(entity, paramResolver)
})

Object.keys(routes).forEach((key) => {
  const { method, path, controller, options } = routes[key]
  router[method](
    path,
    [
      options?.entity ? requestEntity(options.entity) : undefined,
      controller,
    ].filter((fn) => fn !== undefined),
  )
})

module.exports = router
