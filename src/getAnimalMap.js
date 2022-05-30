const { species } = require('../data/zoo_data');

const animalLocation = {
  NE: [],
  NW: [],
  SE: [],
  SW: [],
};

const animalNamesNE = {};
const animalNamesNW = {};
const animalNamesSE = {};
const animalNamesSW = {};

const creatObj = () => {
  animalLocation.NE = animalNamesNE;
  animalLocation.NW = animalNamesNW;
  animalLocation.SE = animalNamesSE;
  animalLocation.SW = animalNamesSW;
};

const animalsPerLocation = () => {
  animalLocation.NE = species.filter((specie) => specie.location === 'NE')
    .map((specie) => specie.name);
  animalLocation.NW = species.filter((specie) => specie.location === 'NW')
    .map((specie) => specie.name);
  animalLocation.SE = species.filter((specie) => specie.location === 'SE')
    .map((specie) => specie.name);
  animalLocation.SW = species.filter((specie) => specie.location === 'SW')
    .map((specie) => specie.name);
  console.log(animalLocation);
  return animalLocation;
};

const animalsIncludeNames = () => {
  animalsPerLocation();
  creatObj();
  animalNamesNE[0] = species.filter((specie) => specie.location === 'NE')
    .map((specie) => specie.residents.name);
  return console.log(animalLocation);
};

function getAnimalMap(options) {
  // seu código aqui
  if (!options) { animalsPerLocation(); }
  if (options === { includeNames: true }) { animalsIncludeNames(); }
}

module.exports = getAnimalMap;

// getAnimalMap();
animalsIncludeNames();
