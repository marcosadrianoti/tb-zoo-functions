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
  test('Para os argumentos Wednesday e 06:00-PM deve retornar a string "The zoo is closed".', () => {
    expect(typeof getOpeningHours('Wednesday', '09:00-AM')).toStrictEqual('string');
    expect(getOpeningHours('Wednesday', '06:00-AM')).toStrictEqual('The zoo is closed');
  });
  test('Para os argumentos Thu e 09:00-AM deve lançar uma exceção com a mensagem: "The day must be valid. Example: Monday"', () => {
    expect(() => {getOpeningHours('Thu', '09:00-AM')}).toThrow('The day must be valid. Example: Monday');
  });
  test('Para os argumentos Friday e 09:00-ZM deve lançar uma exceção com a mensagem: "The abbreviation must be \'AM\' or \'PM\'"', () => {
    expect(() => {getOpeningHours('Friday', '09:00-ZM')}).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  test('Para os argumentos Saturday e C9:00-AM deve lançar uma exceção com a mensagem: "The hour should represent a number"', () => {
    expect(() => {getOpeningHours('Saturday', 'C9:00-AM')}).toThrow('The hour should represent a number');
  });
  test('Para os argumentos Sunday e 09:c0-AM deve lançar uma exceção com a mensagem: "The minutes should represent a number"', () => {
    expect(() => {getOpeningHours('Sunday', '09:c0-AM')}).toThrow('The minutes should represent a number');
  });
  test('Para os argumentos Monday e 13:00-AM deve lançar uma exceção com a mensagem: "The hour must be between 0 and 12"', () => {
    expect(() => {getOpeningHours('Monday', '13:00-AM')}).toThrow('The hour must be between 0 and 12');
  });
  test('Para os argumentos Tuesday e 09:60-AM deve lançar uma exceção com a mensagem: "The minutes must be between 0 and 59"', () => {
    expect(() => {getOpeningHours('Tuesday', '09:60-AM')}).toThrow('The minutes must be between 0 and 59');
  });
});
