const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }
  const employeesNames = employees.find((employeesN) =>
    employeeName === employeesN.firstName
  || employeeName === employeesN.lastName);
  return employeesNames;
}

module.exports = getEmployeeByName;
