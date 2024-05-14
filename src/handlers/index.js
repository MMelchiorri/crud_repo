const express = require('express')
const serverless = require('serverless-http')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.use(cors())

console.log('SONO IN MY FEATURE BRANCH')

exports.api = serverless(app)
