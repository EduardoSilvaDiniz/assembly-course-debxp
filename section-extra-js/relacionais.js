// == é igual ?
// === é estritamente igual ??
//
// == só compara os dados, js se dá a liberdade de converte os dados para comparar
// === é uma comparação de tipo de dado, sem conversão
console.log('01)', '1' == 1)
console.log('02)', '1' === 1)
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3)


const d1 = new Date(0)
const d2 = new Date(0)
console.log('05)', d1 == d2)
console.log('06)', d1 === d2)
console.log('07)', d1.getTime() === d2.getTime())

console.log('08)', undefined == null)
console.log('09)', undefined === null)
