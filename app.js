require('dotenv').config()
const express = require('express');
const app = express();
const router = require('./routes/index');


app.use(router);
app.listen(process.env.SERVER_PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.SERVER_PORT}`)
})