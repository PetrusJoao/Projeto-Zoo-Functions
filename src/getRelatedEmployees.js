const { employees } = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  const testaManagers = employees.some((manger) => manger.managers.includes(id));
  return testaManagers;
}

function getRelatedEmployees(managerId) {
  // seu código aqui
}

module.exports = { isManager, getRelatedEmployees };
