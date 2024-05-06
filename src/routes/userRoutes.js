const rest = require('../controller/rest')

module.exports = [
  {
    path: '/users',
    method: 'get',
    controller: rest.read,
    options: {
      entity: 'user',
    },
  },
  {
    path: '/users/:user',
    method: 'get',
    controller: rest.readByEmail,
    options: {
      entity: 'user',
    },
  },
  {
    path: '/users',
    method: 'post',
    controller: rest.insert,
    options: {
      entity: 'user',
    },
  },
  {
    path: '/users/:user',
    method: 'put',
    controller: rest.update,
    options: {
      entity: 'user',
    },
  },
]
