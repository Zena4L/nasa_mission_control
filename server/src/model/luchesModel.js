const mongoose = require('mongoose');

const launchSchema = new mongoose.Schema({
  flightNumber: {
    type: Number,
    required: [true, 'FlightNumber required'],
    default: 100,
  },
  lunchDate: {
    type: Date,
    required: [true, 'lunchDate required'],
  },
  mission: {
    type: String,
    required: [true, 'mission required'],
  },
  rocket: {
    type: String,
    required: [true, 'rocket required'],
  },
  target: {
    type: String,
    required: [true, 'rocket required'],
  },
  upcoming: {
    type: Boolean,
    required: [true, 'upcoming required'],
  },
  success: {
    type: Boolean,
    required: [true, 'upcoming required'],
    default: true,
  },
  customers: [String],
});

const Launch = mongoose.model('Launch', launchSchema);

const lunches = new Map();

let latestFlightNumber = 100;
const lunuch = {
  flightNumber: 100,
  mission: 'Kepler_Exploration X',
  rocket: 'Explorere IS1',
  lunchDate: new Date('December 27,2023'),
  destination: 'Kepler_442 ',
  customers: ['Zena', 'Nasa'],
  upcoming: true,
  success: true,
};

lunches.set(lunuch.flightNumber, lunuch);

function getAllLunches() {
  return Array.from(lunches.values());
}
const addNewLunch = (lunch) => {
  latestFlightNumber++;
  lunches.set(
    lunuch.flightNumber,
    Object.assign(lunuch, {
      success: true,
      upcoming: true,
      customers: ['Zena', 'Nasa'],
      flightNumber: latestFlightNumber,
    })
  );
};
module.exports = {
  getAllLunches,
  lunches,
  addNewLunch,
};
