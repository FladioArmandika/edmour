
const loaders       = require('./loaders');
const express       = require('express');
const dotenv        = require('dotenv');

startServer = async() => {

    dotenv.config();

    const app = express();

    await loaders(app);

    app.listen(process.env.PORT, err => {
        if(err) {
            console.log(er);
            return;
        }
        console.log('your server is ready');
    })
}


startServer();

