const viagensdb = [{
    id: 1,
    destino:'Paris',
    url:'https://viagemeturismo.abril.com.br/wp-content/uploads/2016/11/thinkstockphotos-4549879531.jpeg',
    datasaida: '23/10/2023',
    datachegada:'26/10/2021',
    preco: 'R$ 10000,00',
    descricao:'Uma viagem de 3 dias a paris, contando transporte, hoteis, visitas a pontos turisticos e alimentação.'
},{
    id: 2,
    destino: 'Las Vegas',
    url: 'https://www.melhoresdestinos.com.br/wp-content/uploads/2019/02/passagens-aereas-las-vegas-capa2019-01.jpg',
    datasaida: '23/11/2023',
    datachegada:'27/11/2021',
    preco: 'R$ 13000,00',
    descricao: 'Uma viagem de 4 dias a Las Vegas, contando transporte, hoteis, visitas a pontos turisticos e alimentação.'
}
]

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