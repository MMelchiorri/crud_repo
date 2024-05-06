const express = require('express')
require('dotenv').config()
const app = express()
const bodyParser = require('body-parser')

const PORT = process.env.PORT

app.use(bodyParser.json())
app.use('/', require('./routes'))

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`)
})
