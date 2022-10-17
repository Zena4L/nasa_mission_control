const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const planetRouter = require('./routes/planetRoutes');

const app = express();
app.use(morgan('dev'));
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

//clinet endpoint
app.use('/planets', planetRouter);

//api endpoint
app.use('api/v1/planets', planetRouter);

module.exports = app;
