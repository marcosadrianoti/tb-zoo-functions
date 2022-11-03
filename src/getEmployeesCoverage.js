const data = require('../data/zoo_data');

// Retorna um objeto com o id, nome completo e os ids das especies de responsabilidade do colaborador.
const getDatasEmployee = (employee) => {
  let objDatas = {};
  data.employees.find((employeeCurr) => {
    if (employeeCurr.firstName === employee || employeeCurr.lastName === employee) {
      objDatas.id = employeeCurr.id;
      objDatas.fullName = `${employeeCurr.firstName} ${employeeCurr.lastName}`;
      objDatas.species = employeeCurr.responsibleFor;
      objDatas.locations = [];
    }
  })
  return objDatas;
};

// Retorna uma propriedade da espécie.
const getDataSpecie = (idSpecie, property) => data.species
  .find((specie) => specie.id === idSpecie)[property];

function getEmployeesCoverage(objEmployee) {
  const datasEmployee = getDatasEmployee(objEmployee.name);
  datasEmployee.species.forEach((idSpecie, index) => {
    datasEmployee.species[index] = getDataSpecie(idSpecie, 'name');
    datasEmployee.locations[index] = getDataSpecie(idSpecie, 'location');
  });

  return datasEmployee
}

console.log(getEmployeesCoverage({ name: 'Sharonda' }));

module.exports = getEmployeesCoverage;
