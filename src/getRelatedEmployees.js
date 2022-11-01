const data = require('../data/zoo_data');

function isManager(id) {
  const dEmpls = data.employees;
  const result = dEmpls.reduce((acc, curr) => curr.managers.some((elem) => elem === id ? true : acc));
  
  return result
}

console.log(isManager('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));

function getRelatedEmployees(managerId) {
  // try {
    // if (!isManager(managerId)){
    //   throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
    // }
    if (isManager(managerId)) {
      
    
    const arr = []
    data.employees.forEach(element => {
      if (element.managers.some((manag) => manag === managerId) === true) {
        arr.push(`${element.firstName} ${element.lastName}`);
      }
    });
    return arr;
  
  // } catch (error) {
  //   return error.message;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  
}

console.log(getRelatedEmployees('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));

module.exports = { isManager, getRelatedEmployees };
