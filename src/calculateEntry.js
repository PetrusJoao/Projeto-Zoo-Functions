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

function calculateEntry(entrants) {
  // seu código aqui
  if (Object.keys(entrants).length === 0) {
    console.log('aqui');
    return 0;
  }
  countEntrants(entrants);
  let valor = 0;
  /* return do countEntrants */.forEach((element) => {
    valor = element.child * 20.99 + element.adult * 49.99 + element.senior * 24.99;
  });
  console.log(valor);
}

module.exports = { calculateEntry, countEntrants };

const entrants = [/* ]; */
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

calculateEntry(entrants);
