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
  test('getOpeningHours retorna a mensagem de zoo fechado se o dia e hora passados foram válidos', () => {
    expect(getOpeningHours('Thursday', '10:00-PM')).toBe('The zoo is closed');
  });
  test('getOpeningHours retorna a mensagem de zoo fechado se o dia passado for Monday', () => {
    expect(getOpeningHours('Monday', '9:00-AM')).toBe('The zoo is closed');
  });
  test('getOpeningHours retorna a mensagem de erro', () => {
    expect(() => {
      getOpeningHours('Thursday', '10:00-GM');
    }).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  test('getOpeningHours retorna a mensagem de erro caso o dia seja inválido', () => {
    expect(() => {
      getOpeningHours('Segunda', '10:00-AM');
    }).toThrow('The day must be valid. Example: Monday');
  });
  test('getOpeningHours retorna a mensagem de erro caso o dia seja inválido', () => {
    expect(() => {
      getOpeningHours('Thursday', 'dez-AM');
    }).toThrow('The hour should represent a number');
  });
  test('getOpeningHours retorna a mensagem de erro caso a hora seja inválida', () => {
    expect(() => {
      getOpeningHours('Thursday', '13:00-AM');
    }).toThrow('The hour must be between 0 and 12');
  });
  test('getOpeningHours retorna a mensagem de erro caso a hora seja inválida', () => {
    expect(() => {
      getOpeningHours('Thursday', '10:60-AM');
    }).toThrow('The minutes must be between 0 and 59');
  });
});
