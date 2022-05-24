const { species } = require('../data/zoo_data');

function countedAnimals(animal) {
  if (Object.keys(animal).length === 1) {
    const procuraAnimal = species.find(
      (animalEspecifico) => animalEspecifico.name.includes(Object.values(animal)),
    );
    return procuraAnimal.residents.length;
  }
  if (Object.keys(animal).length === 2) {
    const pegaResidents = species.find((element) => element.name === animal.specie);
    const procuraOutroAnimal = pegaResidents.residents.filter(
      (animalPorEspecie) => animalPorEspecie.sex === animal.sex,
    );
    return procuraOutroAnimal.length;
  }
}

function countAnimals(animal) {
  if (animal === undefined) {
    const pegaPopulation = species.map((exemplar) => exemplar.residents.length);
    const allAnimals = {};
    const pegaAnimals = species.map((exemplar) => exemplar.name).forEach((element, index) => {
      allAnimals[element] = pegaPopulation[index];
    });
    console.log(pegaAnimals);
    return allAnimals;
  }
  return countedAnimals(animal);
}

module.exports = countAnimals;
