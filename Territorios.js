class Territorio {
    constructor(dono) {
        this.dono = dono;
        this.qtd_tropas_territorio = 0;
        this.text = "";
    }

    adicionar(jogador_que_adiciona, tropas) {
        if (jogador_que_adiciona == this.dono) {
            this.qtd_tropas_territorio += tropas;
            this.text = "Tropas adicionadas com sucesso"
        } else {
            this.text = "Não pertence a este player";
        }
        return this.text;
    }
}

module.exports = {Territorio};