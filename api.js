const express = require("express");
const app = express();
module.exports = app;
app.use(express.json());
const PORT = 4000;

const {BasicDiceRoll} = require("./Decorator");
const {Territorio} = require("./Territorios");

const  territorio1 = new Territorio("Yuri");
const  territorio2 = new Territorio("Cesar");
const  territorio3 = new Territorio("Silva");
const  territorio4 = new Territorio("Santos");

var DB = [territorio1, territorio2, territorio3, territorio4];

//localhost:4000/territorios
app.get('/territorios', (req, res) => {
    res.status(200).json(DB);
});

//localhost:4000/territorios/Cesar/1/3
app.get('/territorios/:dono/:idterritorio/:qtdtropas', (req, res) => {
    const indice = parseInt(req.params.idterritorio);
    const val = parseInt(req.params.qtdtropas);
    const playerdono = req.params.dono;
    const retorno = DB[indice].adicionar(playerdono, val);

    res.json({ retorno, qtd_tropas_territorio: DB[indice].qtd_tropas_territorio });
});


// localhost:4000/roll
app.get('/roll', (req, res) => {
    const basicRoll = new BasicDiceRoll();
    res.json({Numero: basicRoll.roll()});
});


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});