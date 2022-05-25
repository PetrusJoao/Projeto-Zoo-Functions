const { species, hours } = require('../data/zoo_data');

const diasDaSemana = Object.keys(hours);
const animais = species.map((specie) => specie.name);

function objDia(dia) {
  const objDay = {
    officeHour: [],
    exhibition: [],
  };
  if (dia === 'Monday') {
    objDay.officeHour = 'CLOSED';
    objDay.exhibition = 'The zoo will be closed!';
    return objDay;
  }
  objDay.officeHour = `Open from ${hours[dia].open}am until ${hours[dia].close}pm`;
  const allExhibitionOnDay = species.filter((exemplares) => exemplares.availability.includes(dia));
  const nomesOnExhibition = allExhibitionOnDay.map((specie) => specie.name);
  objDay.exhibition = nomesOnExhibition;
  return objDay;
}

function objSemana() {
  const objWeek = {
    Tuesday: objDia('Tuesday'),
    Wednesday: objDia('Wednesday'),
    Thursday: objDia('Thursday'),
    Friday: objDia('Friday'),
    Saturday: objDia('Saturday'),
    Sunday: objDia('Sunday'),
    Monday: objDia('Monday'),
  };
  return objWeek;
}

function getSchedule(scheduleTarget) {
  // seu código aqui
  if (scheduleTarget === undefined) {
    console.log('aqui');
    return objSemana();
  }
  if (diasDaSemana.includes(scheduleTarget)) {
    const info = {
      [scheduleTarget]: objDia(scheduleTarget),
    };
    return info;
  }
  if (animais.includes(scheduleTarget)) {
    const verificaDiaDisponivel = species.find((specie) => specie
      .name === scheduleTarget).availability;
    return verificaDiaDisponivel;
  }
  return objSemana();
}

module.exports = getSchedule;
