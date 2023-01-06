function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}
Produto.prototype.desconto = function (percentual) {
  this.preco = this.preco * (1 - percentual / 100);
};
Produto.prototype.aumento = function (percentual) {
  this.preco = this.preco * (1 + percentual / 100);
};
const produto1 = new Produto("Camiseta", 50);
const produto2 = {
  nome: "Caneca",
  preco: 15,
};
Object.setPrototypeOf(produto2, Produto); // Define um prototype
const produto3 = Object.create(Produto.prototype, {
  nome: {
    enumerable: true,
    value: "Terceiro item",
    writable: true,
    configurable: false,
  },
   preco: {
    enumerable: true,
    value: 42,
    writable: true,
    configurable: false,
  },
}); // Cria o objeto já tendo um prototype
console.dir(produto1);
console.dir(produto2);
console.dir(produto3);
