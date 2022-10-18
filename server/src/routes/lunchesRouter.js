const express = require('express');
const {
  httpGetAllLunches,
  httpAddNewLunch,
} = require('../controller/lunchesController');

const router = express.Router();

router.route('/').get(httpGetAllLunches).post(httpGetAllLunches);
// router.get('/launch', httpGetAllLunches);

module.exports = router;
