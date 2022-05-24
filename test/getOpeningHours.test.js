const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  test('getOpeningHours é uma função', () => {
    expect(typeof getOpeningHours).toBe('function');
  });
  test('getOpeningHours é uma função', () => {
    expect(typeof getOpeningHours()).toBe('object');
  });
  test('getOpeningHours retorna a mensagem de zoo aberto se o dia e hora passados foram válidos', () => {
    expect(getOpeningHours('Thursday', '10:00-AM')).toBe('The zoo is open');
  });
});
