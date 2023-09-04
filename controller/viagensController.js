const ViagensBD = require('../models/viagensdb');
let viagens = []

class ViagemController {
    async getViagens (req, res) {
        viagens = await ViagensBD.listarViagens();
        res.render('viagens', {viagens})
    }
    async addViagem(req, res){
        const { destino } = req.body;

        const viagem = new ViagensBD(destino, url, datasaida, datachegada, descricao, preco);
        viagem.novoViagem();
        viagens.push(viagem);
        res.render('/catalogo');
    }
    async deleteViagem(req, res){
    }
    async updateViagem(req, res){
        const{destino, url, datasaida,datachegada, descricao, preco } = req.body;
        tarefas = tarefas.map(tarefa =>{
            if(tarefa._id == id ){
                tarefa.destino = destino;
                tarefa.url = url;
                tarefa.datasaida = datasaida;
                tarefa.datachegada = datachegada;
                tarefa.descricao = descricao;
                tarefa.preco = preco;
            }
            return tarefa;
        })
        res.redirect('/catalogo')
    }
}    

module.exports = ViagemController;