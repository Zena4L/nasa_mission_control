const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const planetRouter = require('./routes/planetRoutes');
const lunchesRouter = require('./routes/lunchesRouter');

const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

app.use(morgan('dev'));

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));
//clinet endpoint
app.use(planetRouter);
app.use('/launch', lunchesRouter);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

//api endpoint
app.use('api/v1/planets', planetRouter);

module.exports = app;
