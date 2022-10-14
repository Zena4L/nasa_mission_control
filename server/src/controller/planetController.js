const planets = require('../model/planetModel');
exports.getAllPlanet = (req, res) => {
  res.status(200).json(planets);
};
