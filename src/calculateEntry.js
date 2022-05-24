const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  let kid = 0;
  let adulto = 0;
  let idoso = 0;
  entrants.forEach((element) => {
    if (element.age < 18) { kid += 1; }
    if (element.age >= 18 && element
      .age < 50) { adulto += 1; }
    if (element.age >= 50) { idoso += 1; }
  });
  const total = { child: kid, adult: adulto, senior: idoso };
  return total;
}

function calculo(entrants) {
  let valor;
  Object.values(countEntrants(entrants)).forEach((element, index) => {
    if (index === 0) {
      valor = element * 20.99;
    } else if (index === 1) {
      valor += element * 49.99;
    } else if (index === 2) {
      valor += element * 24.99;
    }
  });
  return valor;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  return calculo(entrants);
}

module.exports = { calculateEntry, countEntrants };
