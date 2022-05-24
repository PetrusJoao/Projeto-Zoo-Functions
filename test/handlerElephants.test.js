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
    expect(handlerElephants('names')).toBe(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });

  /* test('getElephants retorna Defined', () => {
    expect(typeof handlerElephants).toBe('function');
  }); */
});
