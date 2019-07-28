const express       = require('express');
const cors          = require('cors');
const bodyParser    = require('body-parser');
const dotenv        = require('dotenv');

const routes        = require('../routes/index.js');

module.exports = async(app) => {
    
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:false}));
    dotenv.config();

    app.use('/', routes());

    return app;
}


