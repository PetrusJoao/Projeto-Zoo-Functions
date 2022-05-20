const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (ids.length === 0) {
    return [];
  }
  const getId = species.filter((specie) => ids.some((id) => id === specie.id));
  return getId;
}

module.exports = getSpeciesByIds;
