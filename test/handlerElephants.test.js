const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  test('Retorna a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  test('Retorna um array quando o parâmetro é names.', () => {
    expect(Array.isArray(handlerElephants('names'))).toStrictEqual(true);
  });
  test('Retorna um array com a relação dos nomes de todos os elefantes', () => {
    expect(handlerElephants('names')).toStrictEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  test('Retorna um valor numérico quando o parâmetro é averageAge', () => {
    expect(typeof handlerElephants('averageAge')).toEqual('number');
  });
  test('Retorna a média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });
  test('Retorna uma string quando o parâmetro é location', () => {
    expect(typeof handlerElephants('location')).toEqual('string');
  });
  test('Retorna a localização dos elefantes', () => {
    expect(handlerElephants('location')).toStrictEqual('NW');
  });
  test('Retorna um valor numérico quando o parâmetro é popularity', () => {
    expect(typeof handlerElephants('popularity')).toEqual('number');
  });
  test('Retorna a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toStrictEqual(5);
  });
  test('Retorna um array quando o parâmetro é availability.', () => {
    expect(Array.isArray(handlerElephants('availability'))).toStrictEqual(true);
  });
  test('Retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    expect(handlerElephants('availability')).toStrictEqual([
      'Friday',
      'Saturday',
      'Sunday',
      'Tuesday',
    ]);
  });
  test('Não passando argumentos a função deve retornar undefined.', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  test('Passada uma string que não contempla uma funcionalidade deve retornar null.', () => {
    expect(handlerElephants('teste')).toBe(null);
  });
  test('Passando por argumento um objeto vazio ({}) deve retornar a string "Parâmetro inválido, é necessário uma string"', () => {
    expect(handlerElephants({})).toBe('Parâmetro inválido, é necessário uma string');
  });
});
