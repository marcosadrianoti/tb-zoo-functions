const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const specieId = data.employees.find((empl) => empl.id === id).responsibleFor[0];

  const members = data.species.find((specie) => specie.id === specieId).residents;

  let oldestAnimal = [];
  let age = 0;
  members.forEach((animal) => {
    if (animal.age > age) {
      oldestAnimal = [animal.name, animal.sex, animal.age];
      age = animal.age;
    }
  });

  return oldestAnimal;
}

module.exports = getOldestFromFirstSpecies;
