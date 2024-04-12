const express = require('express');
const dotenv = require('dotenv').config()
const routes = require('./routes')
const app = express();

const PORT = process.env.PORT;

app.use('/', require('./routes'))

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
})


module.exports = app;


