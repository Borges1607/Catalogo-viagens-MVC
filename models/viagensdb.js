
class Viagens {
async listarViagens(){
    return viagensdb;
}
async adicionarViagem(){
    const novoViagem ={
        id :viagensdb.length + 1 ,
        destino: destino,
        url: url,
        datasaida: datasaida,
        datachegada: datachegada,
        preco: preco,
        descricao: descricao
    }
    viagensdb.push(novoViagem)
    return novoViagem;
}
async deletarViagem(id){
    const index = viagensdb.findIndex(viagem => viagem.id === id);//isso é um sistema parecido com um "for" para verificar se o id fornecido está no banco de dados, e se não tiver, retorna '-1'
    if(index !== -1){
        viagensdb.splice(index, 1);
        return true; //viagem deletada
    }
    return false;//viagem não encontrada
}
}

module.exports= Viagens;