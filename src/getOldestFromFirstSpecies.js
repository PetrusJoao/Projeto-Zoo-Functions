const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const findEmployee = employees.find((employee) => employee.id === id);

  const firstSpecieId = findEmployee.responsibleFor.shift();

  const findFirstSpecie = species.find((specie) => specie.id === firstSpecieId);

  const ages = findFirstSpecie.residents.map((idade) => idade.age).sort((a, b) => b - a);

  const oldest = ages.shift();

  const findOldest = findFirstSpecie.residents
    .find((velho) => velho.age === oldest);

  const answer = Object.values(findOldest);

  return answer;
}

module.exports = getOldestFromFirstSpecies;
