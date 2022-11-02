const data = require('../data/zoo_data');

function countEntrants(arrayEntrants) {
  let child = 0;
  let adult = 0;
  let senior = 0;
  arrayEntrants.forEach((element) => {
    child += element.age < 18 ? 1 : 0;
    adult += element.age >= 18 && element.age < 50 ? 1 : 0;
    senior += element.age >= 50 ? 1 : 0;
  });
  return {
    adult,
    senior,
    child,
  };
}

function calculateEntry(arrayEntrants) {
  if (arrayEntrants === undefined || (Object.keys(arrayEntrants)).length === 0) {
    return 0;
  }
  const entrantsByAge = countEntrants(arrayEntrants);
  const tablePrices = data.prices;
  const totalAdult = entrantsByAge.adult * tablePrices.adult;
  const totalSenior = entrantsByAge.senior * tablePrices.senior;
  const totalChild = entrantsByAge.child * tablePrices.child;

  return totalAdult + totalSenior + totalChild;
}

module.exports = { calculateEntry, countEntrants };
