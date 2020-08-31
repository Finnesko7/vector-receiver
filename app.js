require('dotenv').config()
const express = require('express');
const app = express();
const router = require('./routes/index');
const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(router);
app.listen(process.env.SERVER_PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.SERVER_PORT}`)
})