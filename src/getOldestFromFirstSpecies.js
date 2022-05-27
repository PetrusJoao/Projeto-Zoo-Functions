const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const findEmployee = (id) => employees.find((employee) => employee.id === id);

const findFirstSpecieId = (employee) => employee.responsibleFor.shift();

const findFirstSpecie = (firstSpecieId) => species.find((specie) => specie.id === firstSpecieId);

const ages = (firstSpecie) => firstSpecie.residents.map((idade) => idade.age)
  .sort((a, b) => b - a);

const oldestIn = (ageIn) => ageIn.shift();

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const employee = findEmployee(id);

  const firstSpecieId = findFirstSpecieId(employee);

  const firstSpecie = findFirstSpecie(firstSpecieId);

  const age = ages(firstSpecie);

  const oldest = oldestIn(age);

  const findOldest = firstSpecie.residents
    .find((velho) => velho.age === oldest);

  const answer = Object.values(findOldest);

  return answer;
}

module.exports = getOldestFromFirstSpecies;
getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1');
