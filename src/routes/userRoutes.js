const rest = require('../controller/rest')

module.exports = [
    {
        path: '/users',
        method: 'get',
        controller: rest.read,
    },
    {
        path: '/users/:email',
        method: 'get',
        controller: rest.readByEmail,
    },
    {
        path: '/users',
        method: 'post',
        controller: rest.insert,
    }
]