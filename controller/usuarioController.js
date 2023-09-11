const usuariodb = require('../models/usuariosdb');
const md5 = require('md5');

async function autenticar(req, res){
    if(req.body.email == "" || req.body.senha == ""){
        alert("preencha todos os campos");
    } else{
        const {email, senha} = req.body;
        let resp = await usuariodb.autenticar(email, senha)
        //se tem usuario valido, registra o mesmo na sessão e redireciona para a tela inicial
        if(resp.length >0){
            console.log(resp);
            req.session.usuario = {
                idUsuario: resp[0].idUsuario,
                nome: resp[0].nome,
                email: resp[0].email
            }
            res.redirect('/viagens')
        } else{             //se não , retorna tela de login
            res.redirect('/login')
        }
    }
}
async function cadastrarUsuario(req, res) {
    const {nome, email, senha} = req.body;
    usuariodb.cadastrar(nome,email,senha);
    res.redirect("/viagens")
};

module.exports = {autenticar,cadastrarUsuario};