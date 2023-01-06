const nums = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

nums.splice(0, 3, 56, 63, 76, 34, 89);
var div = nums.filter(valor => valor % 3 === 0) 
var div = div.map(valor => valor*valor);
var div = div.reduce((acumulador, valor) => {
    return acumulador - valor
}, -200);
console.log(div);

