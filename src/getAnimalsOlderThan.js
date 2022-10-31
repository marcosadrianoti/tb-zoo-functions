const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return data.species.find((especie) => especie.name === animal).residents
    .every((resident) => resident.age >= age);
}

console.log(getAnimalsOlderThan('penguins', 10));

module.exports = getAnimalsOlderThan;
