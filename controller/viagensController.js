const Viagem = require('../models/viagensdb');

async function getViagens (req, res) {
    const viagens = await Viagem.listarViagens();
    // console.log(viagens);
    return res.render('catalogo', {viagens});
}
async function addViagem(req, res){
    const { destino, datasaida, datachegada, descricao, preco, url } = req.body;
    console.log(req.body);
    const viagem = new Viagem(destino, datasaida, datachegada, descricao, preco, url);
    console.log(viagem);
    Viagem.adicionarViagem(viagem);
    res.redirect('/viagens');
}
async function deleteViagem(req, res){
    const {id} = req.body;
    Viagem.deletarViagem(id);
    res.redirect('/viagens');
}

async function editViagem(req, res){
    const {id} = req.params; 
    const viagem = await Viagem.verViagem(id);
    return res.render('editView', { viagem: viagem[0] });
}


async function updateViagem(req, res){
    const{id, destino, datasaida, datachegada, descricao, preco, url } = req.body;
    const viagem = new Viagem(destino, datasaida, datachegada, descricao, preco, url);
    Viagem.update(viagem,id);
    res.redirect('/viagens');

}
module.exports = {getViagens,addViagem,deleteViagem,updateViagem,editViagem};