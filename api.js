const express = require("express");

const app = express();

module.exports = app;

const {DiceRoll, BasicDiceRoll, DiceRollDecorator} = require("./Decorator");

app.use(express.json());


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