const data = require('../data/zoo_data');

const dataEspecies = data.species;

const arrDaysAnimal = (animalName) => { // Pega os dias disponíveis dos animais
  const animalObj = dataEspecies.filter((animal) => animal.name === animalName);
  return animalObj[0].availability;
};

let animalsInExhibition = [];
const nameAni = dataEspecies.map((animal) => animal.name);
const daysOfWeek = Object.keys(data.hours);

const cacthAnimals = (day, animal) => { // Pega o animal disponível no dia em foco
  if (arrDaysAnimal(animal).includes(day) === true) {
    animalsInExhibition.push(animal);
  }
};

const totalWeek = (myWeek) => { // Monta a semana inteira
  const resultWeek = {};
  Object.keys(myWeek).forEach((day) => {
    nameAni.forEach((animal) => {
      cacthAnimals(day, animal);
    });
    const textH = day !== 'Monday' ? `Open from ${myWeek[day].open}am until ${myWeek[day].close}pm`
      : 'CLOSED';
    const textExhibition = day !== 'Monday' ? animalsInExhibition : 'The zoo will be closed!';
    resultWeek[day] = {
      officeHour: textH,
      exhibition: textExhibition,
    };
    animalsInExhibition = [];
  });
  return resultWeek;
};

const week = { ...data.hours };

function getSchedule(scheduleTarget) {
  if (nameAni.includes(scheduleTarget)) {
    return arrDaysAnimal(scheduleTarget);
  }
  if (nameAni.includes(scheduleTarget) === false && daysOfWeek.includes(scheduleTarget) === false) {
    return totalWeek(week);
  }
  const resultDay = totalWeek(week);
  return {
    [scheduleTarget]: resultDay[scheduleTarget],
  };
}

module.exports = getSchedule;
