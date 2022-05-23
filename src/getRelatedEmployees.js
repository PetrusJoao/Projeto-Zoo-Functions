const { employees } = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  const testaManagers = employees.some((manager) => manager.managers.includes(id));
  return testaManagers;
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId)) {
    return employees.filter((employee) => employee.managers
      .includes(managerId)).map((employee) => `${employee.firstName} ${employee.lastName}`);
  } throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
