const data = require('../data/zoo_data');

// Retorna um objeto com o id, nome completo e os ids das especies de responsabilidade do colaborador.
const getDatasEmployee = (employee) => {
  let objDatas = {};
  data.employees.find((employeeCurr) => {
    if (employeeCurr.firstName === employee
      || employeeCurr.lastName === employee
      || employeeCurr.id === employee) {
      objDatas = objCreator(objDatas, employeeCurr);
    }
  })

  return objDatas;
};

// Cria objeto do colaborador
const objCreator = (obj, employeeCurr) => {
  obj.id = employeeCurr.id;
  obj.fullName = `${employeeCurr.firstName} ${employeeCurr.lastName}`;
  obj.species = employeeCurr.responsibleFor;

  return obj;
};

// Troca id por name e cria location
const changeIdAndAddLocation = (obj) => {
  const arraySpecies = [];
  const arrayLocation = [];
  obj.species.forEach((idSpecie) => {
    arraySpecies.push(getDataSpecie(idSpecie, 'name'));
    arrayLocation.push(getDataSpecie(idSpecie, 'location'));
  });

  return [arraySpecies, arrayLocation];
};

// Retorna uma propriedade da espécie.
const getDataSpecie = (idSpecie, property) => data.species
  .find((specie) => specie.id === idSpecie)[property];

function getEmployeesCoverage(objEmployee) {
  if (objEmployee !== undefined) {
    const reference = objEmployee.name ? objEmployee.name : objEmployee.id;
    const datasEmployee = getDatasEmployee(reference);
    const arraySpecies = changeIdAndAddLocation(datasEmployee)[0];
    const arrayLocation = changeIdAndAddLocation(datasEmployee)[1];
    datasEmployee.species = arraySpecies;
    datasEmployee.locations = arrayLocation;

    return datasEmployee;
  }
  const totalList = [];
  data.employees.forEach((employee) => {
    let objDatas = {};
    objDatas = objCreator(objDatas, employee);
    const arraySpecies = changeIdAndAddLocation(objDatas)[0];
    const arrayLocation = changeIdAndAddLocation(objDatas)[1];
    objDatas.species = arraySpecies;
    objDatas.locations = arrayLocation;
    totalList.push(objDatas);
  });

  return totalList;
}

// console.log(getEmployeesCoverage());

module.exports = getEmployeesCoverage;
