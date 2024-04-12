const rest = require('../controller/rest')

module.exports = [
    {
        path: '/users',
        method: 'get',
        controller: rest.read,
    }
]