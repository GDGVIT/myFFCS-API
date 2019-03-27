if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config({path: __dirname + '/.env'});
}

const express = require('express');
const bodyParser = require('body-parser');
const mongoose    = require("mongoose");
const app = express();

mongoose.connect(process.env.DATABASE_URI, {useNewUrlParser: true});

mongoose.connection.once('open', () => {
    console.log('Connected to Database');
})
