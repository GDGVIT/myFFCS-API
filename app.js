if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config({path: __dirname + '/.env'});
}

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const app = express();

mongoose.connect(process.env.DATABASE_URI, {useNewUrlParser: true});

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connection.once('open', () => {
    console.log('Connected to Database');
});

const indexRoutes = require('./routes/index');
const userRoutes = require('./routes/user');

app.use('/', indexRoutes);
app.use('/user', userRoutes);

app.listen(process.env.PORT, () => {
    console.log('myFFCS Server API Started');
});
