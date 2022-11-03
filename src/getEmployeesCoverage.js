const data = require('../data/zoo_data');
const { employees } = data;

// Retorna um objeto com o id, nome completo e os ids das especies de responsabilidade do colaborador.
const getDatasEmployee = (employee) => {
  let objDatas = {};
  data.employees.find((employeeCurr) => {
    if (employeeCurr.firstName === employee
      || employeeCurr.lastName === employee
      || employeeCurr.id === employee) {
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
// const getDataSpecie = (ids) => {
//   ids.map((id) => data.species.find((animal) => animal.id === id).name);
// }

function getEmployeesCoverage(objEmployee) {
  if (objEmployee !== undefined) {
    const reference = objEmployee.name ? objEmployee.name : objEmployee.id;
    const datasEmployee = getDatasEmployee(reference);
    const arraySpecies = [];
    const arrayLocation = [];
    datasEmployee.species.forEach((idSpecie, index) => {
      // datasEmployee.species[index] = getDataSpecie(idSpecie, 'name');
      arraySpecies.push(getDataSpecie(idSpecie, 'name'));
      arrayLocation.push(getDataSpecie(idSpecie, 'location'));
      // datasEmployee.locations[index] = getDataSpecie(idSpecie, 'location');
    });
    datasEmployee.species = arraySpecies;
    datasEmployee.locations = arrayLocation;

    return datasEmployee;
  }
  const totalList = [];
  data.employees.forEach((employee) => {
    const objDatas = {};
    objDatas.id = employee.id;
    objDatas.fullName = `${employee.firstName} ${employee.lastName}`;
    objDatas.species = employee.responsibleFor;
    objDatas.locations = [];
    totalList.push(objDatas);

  });
  return totalList;
}

console.log(getEmployeesCoverage());

module.exports = getEmployeesCoverage;
