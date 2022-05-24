const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  test('handlerElephants é uma função', () => {
    expect(typeof handlerElephants).toBe('function');
  });
  test('handlerElephants retorna undefined se não ouver parametro de entrada', () => {
    expect(handlerElephants()).toBe(undefined);
  });
  test('handlerElephants retorna uma string predeterminada se o parametro de entrada for diferente de string', () => {
    expect(handlerElephants(1)).toBe('Parâmetro inválido, é necessário uma string');
  });
  test('handlerElephants retorna a quantidade de elefantes se o parametro de entrada for count', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  test('handlerElephants retorna os nomes dos residentes de elefantes se o parametro de entrada for names', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  test('handlerElephants retorna amédia de idade dos elefantes se o parametro de entrada for averageAge', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  test('handlerElephants retorna null se o parametro de entrada for elephants', () => {
    expect(handlerElephants('elephants')).toBe(null);
  });
  test('handlerElephants retorna um array com as informações se o parametro de entrada for availability', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });

  /* test('getElephants retorna Defined', () => {
    expect(typeof handlerElephants).toBe('function');
  }); */
});
