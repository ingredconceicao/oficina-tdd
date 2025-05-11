const {soma,subtrair, multiplicar, dividir } = require('./soma');


describe('Soma', () => {
  it('deverá somar dois números inteiros', () => {
    expect(soma(2,2)).toBe(4);
  });

it('subtrai dois números ', () => {
  expect(subtrair(5,3)).toBe(2);
  });


  it('multiplica dois números ', () => {
    expect(multiplicar(3,3)).toBe(9);
  });


  it('divide dois números ', () => {
    expect(dividir(10,2)).toBe(5);
  });


   it('erro ao dividir por zero', () => {
    expect(() => dividir(5, 0)).toThrow('Divisão por zero não é permitida.');
  });

})