
const db= require('./db');

class Viagem {
    constructor(destino, datasaida, datachegada, descricao, preco, url){
        this.destino = destino;
        this.datasaida = datasaida; 
        this.datachegada = datachegada;
        this.descricao = descricao;
        this.preco = preco;
        this.url = url;
    }

    static async listarViagens(){
        return await db.query(`SELECT * FROM viagem;`);   
    }
    static async verViagem(id){
        console.log(id);
        return await db.query(`SELECT * FROM viagem where idViagem = ${id}`);
    }
    static async adicionarViagem(viagem){
       return await db.query(`INSERT INTO viagem (destino, url, datachegada, datasaida, preco, descricao) VALUES ('${viagem.destino}','${viagem.url}','${viagem.datachegada}','${viagem.datasaida}','${viagem.preco}','${viagem.descricao}');`);
    }
    static async deletarViagem(id){
        return await db.query(`DELETE FROM viagem WHERE idViagem = ${id};`);
    }
    static async update(viagem,id){
        return await db.query(`UPDATE viagem SET destino = '${viagem.destino}', datasaida = '${viagem.datasaida}', datachegada = '${viagem.datachegada}', preco = '${viagem.preco}', descricao = '${viagem.descricao}', url = '${viagem.url}' WHERE idViagem = ${id};`);
    }
}

module.exports= Viagem;