const Queue = require('./queue');

describe('Queue', () => {
  let fila;

  beforeEach(() => {
    fila = new Queue();
  });

  it('Deve criar uma fila vazia', () => {
    expect(fila.size()).toBe(0);
  });

  it('Deve ser capaz de calcular o tamanho da fila', () => {
    fila.add('A');
    fila.add('B');
    expect(fila.size()).toBe(2);
  });

  it('Deve ser capaz de adicionar um item na fila', () => {
    fila.add('A');
    expect(fila.size()).toBe(1);
    expect(fila.peek()).toBe('A');
  });

  it('Deve escolher o primeiro item da fila', () => {
    fila.add('A');
    fila.add('B');
    expect(fila.peek()).toBe('A');
  });

  it('Deve remover o primeiro item da fila', () => {
    fila.add('A');
    fila.add('B');
    expect(fila.dequeue()).toBe('A');
    expect(fila.peek()).toBe('B');
    expect(fila.size()).toBe(1);
  });
});
