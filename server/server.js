const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const config = require('./config');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.get('/', (req, res, next) => {
    res.json({
        user: "Malcolm Ross"
    });
});

app.listen(config.port, err => {
    console.log('Magic happens on port awesome ' + config.port);
})