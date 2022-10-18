const { getAllLunches, addNewLunch } = require('../model/luchesModel');

exports.httpGetAllLunches = (req, res) => {
  return res.status(200).json(Array.from(getAllLunches));
};
exports.httpAddNewLunch = (req, res) => {
  const lunch = req.body;

  if (!lunch.mission || !lunch.rocket || !lunchlunchDate || !lunch.target) {
    return res.status(400).json({
      error: 'Missing required launch property',
    });
  }

  lunch.lunchDate = new Date(lunch.lunchDate);
  lunch.lunchDate = new Date(lunch.lunchDate);
  if (isNaN(lunch.lunchDate)) {
    return res.status(400).json({
      error: 'Invalid launch date',
    });
  }
  addNewLunch(lunch);
  return res.status(201).json(lunch);
};
