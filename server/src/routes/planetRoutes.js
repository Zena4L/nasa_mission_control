const express = require('express');
const { getAllPlanet } = require('../controller/planetController');

const router = express.Router();

router.get('/planets', getAllPlanet);

module.exports = router;
