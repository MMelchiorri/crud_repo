const router = require("express").Router();

const routes = [
    ...require('./userRoutes')
]
Object.keys(routes).forEach(key => {
    const { method, path, controller} = routes[key];
    router[method](path, controller)
})

module.exports = router;
