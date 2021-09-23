//npmimport { expect, test } from '@jest/globals';
//import * as calculadora from './calculadora.js';

const calculadora = require('.calculator');

test("testantdo soma de 1 + 1", () => {
    expect(calculadora.soma(1,1)).tobe(2);
})

test("testar divisao de 42/6", () => {
    expect(calculadora.divisao(42,6)).tobe(7);
})

test("testar soma de 5+5 ", () => {
    expect(calculadora.soma(5,5)).tobe(10);
})