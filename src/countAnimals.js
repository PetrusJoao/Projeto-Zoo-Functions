const { species } = require('../data/zoo_data');

// eslint-disable-next-line max-lines-per-function
function countAnimals(animal) {
  // seu código aqui
  if (animal === undefined) {
    const pegaAnimals = species.map((exemplar) => exemplar.name);
    const pegaPopulation = species.map((exemplar) => exemplar.residents.length);
    const allAnimals = {};
    pegaAnimals.forEach((element, index) => {
      allAnimals[element] = pegaPopulation[index];
    });
    return allAnimals;
  }
  if (Object.keys(animal).length === 1) {
    const pegaAnimal = Object.values(animal);
    const procuraAnimal = species.find(
      (animalEspecifico) => animalEspecifico.name.includes(pegaAnimal),
    );
    return procuraAnimal.residents.length;
  }
  if (Object.keys(animal).length === 2) {
    console.log(animal.sex);
    const pegaResidents = species.find((element) => element.name === animal.specie);
    const procuraOutroAnimal = pegaResidents.residents.filter(
      (animalPorEspecie) => animalPorEspecie.sex === animal.sex,
    );
    return procuraOutroAnimal.length;
  }
}

module.exports = countAnimals;
