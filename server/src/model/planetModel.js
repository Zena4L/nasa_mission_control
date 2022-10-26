const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');
const { parse } = require('csv-parse');

const planetSchema = new mongoose.Schema({
  keplerName: {
    type: String,
    required: [true, 'name is required'],
  },
});

const Planet = mongoose.model('Planet', planetSchema);

const habitablePlanets = [];

function isHabitablePlanet(planet) {
  return (
    planet['koi_disposition'] === 'CONFIRMED' &&
    planet['koi_insol'] > 0.36 &&
    planet['koi_insol'] < 1.11 &&
    planet['koi_prad'] < 1.6
  );
}

function loadPlanetData() {
  return new Promise((resolve, reject) => {
    fs.createReadStream(path.join(__dirname, '..', 'data', 'kepler_data.csv'))
      .pipe(
        parse({
          comment: '#',
          relax_column_count: true,
          raw: true,
          columns: true,
          relax_quotes: true,
          escape: '\\',
          ltrim: true,
          // rtrim: true,
        })
      )
      .on('data', async (data) => {
        if (isHabitablePlanet(data)) {
          // habitablePlanets.push(data);
          await Planet.create({
            keplerName: data.kepler_name,
          });
        }
      })
      .on('error', (err) => {
        console.log(err);
        reject(err);
      })
      .on('end', () => {
        console.log(`${habitablePlanets.length} habitable planets found!`);
        resolve();
      });
  });
}

async function getAllPlanets() {
  return await Planet.find({});
}

module.exports = {
  loadPlanetData,
  planets: habitablePlanets,
};
