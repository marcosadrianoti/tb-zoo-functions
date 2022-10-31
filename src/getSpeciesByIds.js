const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const resultArray = [];
  ids.forEach((id) => resultArray.push(data.species.find((element) => element.id === id)));
  return resultArray;
}

console.log(getSpeciesByIds());

module.exports = getSpeciesByIds;
