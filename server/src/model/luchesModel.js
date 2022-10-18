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
