// Classe protótipo
class Ovelha {
    constructor(name, weight) {
      this.name = name;
      this.weight = weight;
    }
  
    clone() {}
  }
  
  // Implementação concreta do Ovelha
  class PinkOvelha extends Ovelha {
    constructor(name, weight) {
      super(name, weight);
      this.color = 'pink';
    }
  
    clone() {
      return new PinkOvelha(this.name, this.weight);
    }
  }
  
  // Exemplo de uso:
  
  const pinkOvelha = new PinkOvelha('Dolly', 50);
  const clonedOvelha = blackOvelha.clone();
  
  console.log(clonedOvelha.name); // Saída: Dolly
  console.log(clonedOvelha.weight); // Saída: 50
  console.log(clonedOvelha.color); // Saída: black