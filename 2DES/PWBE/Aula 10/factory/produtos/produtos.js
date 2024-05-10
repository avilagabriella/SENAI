class Produto {
    constructor(nome, preco) {
      this.nome = nome;
      this.preco = preco;
    }
  
    obterDados() {
      console.log(`Produto: ${this.nome}, Preço: ${this.preco}`);
    }
  }

class ProdutoFactory{
    criar(tipo){
        let produto;

    if (tipo === 'A') {
      produto = new Produto('Açucar', 10.5);
    } else if (tipo === 'B') {
      produto = new Produto('Sal', 2.5);
    } else if (tipo === 'C') {
      produto = new Produto('Óleo', 12.9);
    } else if (tipo === 'D') {
      produto = new Produto('Azeite', 8.9);
    } else if (tipo === 'E') {
      produto = new Produto('Leite', 4.5);
    } else if (tipo === 'F') {
      produto = new Produto('Maionese', 9.4);
    } else if (tipo === 'G') {
      produto = new Produto('Farinha', 6.6);
    } else if (tipo === 'H') {
      produto = new Produto('Bolacha', 3.5);
    } else if (tipo === 'I') {
      produto = new Produto('Macarrão', 12.9);
    } else if (tipo === 'J') {
      produto = new Produto('Arroz', 10.8);

    } 

    return produto;
  }
}

const factory = ProdutoFactory();

const sal = factory.criar('B');
const acucar = factory.criar('A');
const óleo = factory.criar('C');
const feijao = new Produto('Feijão', 8.5);
const arroz = factory.criar('J');
const macarrão = factory.criar('I');
const bolacha = factory.criar('H');
const farinha = factory.criar('G');
const leite = factory.criar('E');
const azeite = factory.criar('D');
const maionese = factory.criar('F');

sal.obterDados();

acucar.obterDados();

óleo.obterDados();

feijao.obterDados();

arroz.obterDados();

macarrão.obterDados();

bolacha.obterDados();

farinha.obterDados();

leite.obterDados();

azeite.obterDados();

maionese.obterDados();


    