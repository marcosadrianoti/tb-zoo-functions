const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const eName = employeeName;
  const eData = data.employees;
  const res = eData.find((employee) => employee.firstName === eName || employee.lastName === eName);
  return res !== undefined ? res : {};
}

console.log(getEmployeeByName('Emery'));

module.exports = getEmployeeByName;
