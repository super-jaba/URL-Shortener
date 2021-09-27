const express = require('express');
const mongoose = require('mongoose');

const DB_URI = require('./config').DB_URI;
const router = require('./routes/routes');
const errorMiddleware = require('./middlewares/api-error-middleware');


const app = express();

mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB has been connected successfully.'))
    .catch(err => console.log(`An error occured while connecting MongoDB: ${err}`));

app.use(express.json());

app.use('/', router);

app.use(errorMiddleware);


module.exports = app;