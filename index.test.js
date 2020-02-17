const toCamelCase = require('./index');
test(`'este es un ejemplo' should return 'esteEsUnEjemplo`,() => {
    expect(toCamelCase('este es un ejemplo')).toBe('esteEsUnEjemplo');
});