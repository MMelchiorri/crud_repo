const express = require('express');
const dotenv = require('dotenv').config()
const db_connection = require('./database')

const app = express();

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
})


module.exports = app;


