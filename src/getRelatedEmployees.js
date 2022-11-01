const data = require('../data/zoo_data');

function isManager(id) {
  const dEmpls = data.employees;
  const result = dEmpls.map((empl) => empl.managers);
  const arr = [];
  result.forEach((elem) => arr.push(...elem));
  return arr.some((el) => el === id);
}

console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const arr = [];
    data.employees.forEach((element) => {
      if (element.managers.some((manag) => manag === managerId) === true) {
        arr.push(`${element.firstName} ${element.lastName}`);
      }
    });
    return arr;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
