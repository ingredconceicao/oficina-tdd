const Calculadora = require('./calculadora')

describe('Calculadora', () => {
  
  let calc;

  beforeEach(() => {
    calc = new Calculadora();
  });

  it('Deverá retornar a soma de dois números', () => {
    expect(calc.soma(2,2)).toBe(4)
    
  })

  it('Deverá retornar a subtração de dois números', () => {
    expect(calc.subtrair(5,3)).toBe(2)
    
  })

  it('Deverá retornar a multiplicação entre dois números', () => {
    expect(calc.multiplicar(3,3)).toBe(9)
  })

  it('Deverá retornar a divisao entre dois números', () => {
    expect(calc.dividir(10,2)).toBe(5)
  });

  it('erro ao dividir por zero', () => {
    expect(() => calc.dividir(5, 0)).toThrow('Divisão por zero não é permitida.');
  });
})