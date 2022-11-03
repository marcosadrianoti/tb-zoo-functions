const data = require('../data/zoo_data');

// Cria objeto do colaborador
const objCreator = (obj, employeeCurr) => {
  const myObj = obj;
  myObj.id = employeeCurr.id;
  myObj.fullName = `${employeeCurr.firstName} ${employeeCurr.lastName}`;
  myObj.species = employeeCurr.responsibleFor;

  return myObj;
};

// Retorna um objeto com o id, nome completo e os ids das especies de responsabilidade do colaborador.
const getDatasEmployee = (employee) => {
  let objDatas = {};
  data.employees.find((employeeCurr) => {
    if (employeeCurr.firstName === employee
      || employeeCurr.lastName === employee
      || employeeCurr.id === employee) {
      objDatas = objCreator(objDatas, employeeCurr);
    }
    return '';
  });

  return objDatas;
};

// Retorna uma propriedade da espécie.
const getDataSpecie = (idSpecie, property) => data.species
  .find((specie) => specie.id === idSpecie)[property];

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

// Lança o erro.
const getError = (objEmployee) => {
  if (objEmployee.id === 'Id inválido') {
    throw new Error('Informações inválidas');
  }
};

const totalList = [];
function getEmployeesCoverage(objEmployee) {
  if (objEmployee !== undefined) {
    getError(objEmployee);
    const reference = objEmployee.name ? objEmployee.name : objEmployee.id;
    const datasEmployee = getDatasEmployee(reference);
    datasEmployee.locations = [...changeIdAndAddLocation(datasEmployee)[1]];
    datasEmployee.species = [...changeIdAndAddLocation(datasEmployee)[0]];
    return datasEmployee;
  }
  data.employees.forEach((employee) => {
    let objDatas = {};
    objDatas = objCreator(objDatas, employee);
    objDatas.locations = [...changeIdAndAddLocation(objDatas)[1]];
    objDatas.species = [...changeIdAndAddLocation(objDatas)[0]];
    totalList.push(objDatas);
  });
  return totalList;
}

module.exports = getEmployeesCoverage;
