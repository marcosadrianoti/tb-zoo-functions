const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  test('Teste não passando argumentos.', () => {
    expect(getOpeningHours()).toStrictEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  test('Retorna um objecto quando o parâmetro é vazio.', () => {
    expect(typeof getOpeningHours()).toStrictEqual('object');
  });
  test('Para os argumentos Monday e 09:00-AM deve retornar a string "The zoo is closed" (Já que o Zoo está sempre fechado na segunda).', () => {
    expect(typeof getOpeningHours('Monday', '09:00-AM')).toStrictEqual('string');
    expect(getOpeningHours('Monday', '09:00-AM')).toStrictEqual('The zoo is closed');
  });
  test('Para os argumentos Tuesday e 09:00-AM deve retornar a string "The zoo is open".', () => {
    expect(typeof getOpeningHours('Tuesday', '09:00-AM')).toStrictEqual('string');
    expect(getOpeningHours('Tuesday', '09:00-AM')).toStrictEqual('The zoo is open');
  });
  test('Para os argumentos Wednesday e 09:00-PM deve retornar a string "The zoo is closed".', () => {
    expect(typeof getOpeningHours('Wednesday', '09:00-AM')).toStrictEqual('string');
    expect(getOpeningHours('Wednesday', '06:00-AM')).toStrictEqual('The zoo is closed');
  });
});
