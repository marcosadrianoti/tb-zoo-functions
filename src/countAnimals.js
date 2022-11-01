const data = require('../data/zoo_data');

function countAnimals(animal) {
  let result = {};
  if (animal === undefined) {
    const specieNames = data.species.map((el) => el.name);
    const speciePop = data.species.map((el) => el.residents.length);
    specieNames.forEach((el, id) => {
      result[el] = speciePop[id];
    });
  } else if (Object.keys(animal).length === 1) {
    const animalsSameSpec = data.species.filter((el) => el.name === animal.specie)[0].residents;
    result = animalsSameSpec.length;
  } else {
    const animalsSameSpec = data.species.filter((el) => el.name === animal.specie)[0].residents;
    const animalsSameSpecieBySex = animalsSameSpec.filter((el) => el.sex === animal.sex);
    result = animalsSameSpecieBySex.length;
  }
  return result;
}

module.exports = countAnimals;
