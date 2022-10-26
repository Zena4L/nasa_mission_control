const { planets } = require('../model/planetModel');

exports.getAllPlanet = async (req, res) => {
  // const planets = await Planet.find(req.body);

  res.status(200).json(planets);
};
