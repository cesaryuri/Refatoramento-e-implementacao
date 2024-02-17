//Eu como usuário, quero lançar os dados para defender os meus territórios//

// Interface para os lançamentos de dados
class DiceRoll {
    roll() {
        throw new Error('Método abstrato e deve ser implementado pelas subclasses.');
    }
}

// Implementação concreta da classe de lançamento de dados
class BasicDiceRoll extends DiceRoll {
    roll() {
        return Math.floor(Math.random() * 6) + 1; // Simula o lançamento de um dado de 6 faces
    }
}

// Decorator para lançamentos de dados
class DiceRollDecorator extends DiceRoll {
    constructor(diceRoll) {
        super();
        this.diceRoll = diceRoll;
    }

    roll() {
        return this.diceRoll.roll();
    }
}


// Exemplo de uso
const basicRoll = new BasicDiceRoll();
console.log("Lançamento básico:", basicRoll.roll());



module.exports={DiceRoll, BasicDiceRoll, DiceRollDecorator};