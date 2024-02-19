const express = require("express");
const app = express();
module.exports = app;
app.use(express.json());

//importando as classes
const {DiceRoll, BasicDiceRoll, DiceRollDecorator} = require("./Decorator");
const {Territorio} = require("./Territorios");

const  territorio1 = new Territorio("Yuri");
const  territorio2 = new Territorio("Cesar");
const  territorio3 = new Territorio("Cilva");
const  territorio4 = new Territorio("Cantos");

//array de classes pré instânciadas
var DB = [territorio1, territorio2, territorio3, territorio4];

//Retornar todos dados do array
app.get('/territorios', (req, res) => {
    res.status(200).json(DB);
});

//Add tropas para player e território específico
app.get('/territorios/:dono/:idterritorio/:qtdtropas', (req, res) => {
    const indice = parseInt(req.params.idterritorio);
    const val = parseInt(req.params.qtdtropas);
    const playerdono = req.params.dono;
    const retorno = DB[indice].adicionar(playerdono, val);

    res.json({ retorno, qtd_tropas_territorio: DB[indice].qtd_tropas_territorio });
});




// Rota para lidar com o lançamento de dados
app.get('/roll', (req, res) => {
    const basicRoll = new BasicDiceRoll();
    const resultado_dados = basicRoll.roll();
    res.json({ resultado_dados });
});

// Inicializa o servidor
app.listen(4000, () => {
    console.log(`Servidor rodando em http://localhost:${4000}`);
});