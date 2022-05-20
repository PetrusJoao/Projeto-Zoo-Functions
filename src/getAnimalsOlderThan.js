const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animals = species.find((specie) => animal === specie.name)
    .residents.every((idade) => idade.age >= age);
  console.log(animals);
  return animals;
}

module.exports = getAnimalsOlderThan;
