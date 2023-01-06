function aff() {
    var array = document.getElementById('array')

}

var par = array.filter(valor => valor % 2 === 0)
var impar = array.filter(valor => valor % 2 !== 0)
var primeiro_par = par.splice(0, 1)
var impar_novo = [...impar, ...primeiro_par];

var nova_array = array.filter((valor, indice) => valor % indice == 0)

console.log(impar_novo)
console.log(nova_array)


/*
var impares = [], pares = [], array = [];
for (let i = 0; i < 10; i++) {
    let num = prompt("Digite um número:");
    if (num % 2 === 0)
        pares.push(num);
    else
        impares.push(num);
}
impares.push(pares.shift());
impares.forEach((valor, indice) => {
    if (valor % indice === 0)
        array.push(valor);
});
pares.forEach((valor, indice) => {
    if (valor % indice === 0)
        array.push(valor);
});
*/