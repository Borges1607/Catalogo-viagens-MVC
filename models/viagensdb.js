
class Viagens {
    constructor(id, destino, url, datachegada, datasaida, preco, descricao){
        this.id = id;
        this.destino = destino;
        this.url = url;
        this.datachegada = datachegada;
        this.datasaida = datasaida;
        this.preco = preco;
        this.descricao = descricao;
    }

    async listarViagens(){
        const db= require('./db');
        return await db.query("SELECT * FROM viagem");   
    }
    async adicionarViagem(){
        const db= require('./db');
        let resp = db.query(`INSERT INTO viagem (destino, url, datachegada, datasaida, preco, descricao) VALUES ('${this.destino}','${this.url}','${this.datachegada}','${this.datasaida}','${this.preco}','${this.descricao}')`);
    }
    async deletarViagem(id){
        const db = require('./db');
        if(await db.query("DELETE FROM viagem WHERE id_usuario" = id_usuario)){
            return true; //viagem deletada
        }else{
            return false;//viagem não encontrada
        }
    }
}

module.exports= Viagens;