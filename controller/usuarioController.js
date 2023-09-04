const usuariodb = require('../models/usuariosdb');
const md5 = require('md5');

class UsuarioController{
    async autenticar(req, res){
        if(req.body.email == "" || req.body.senha == ""){
            console.log("preencha todos os campos");
        } else{
            let resp = await usuariodb.autenticar(req.body.email, md5(req.body.senha))
            //se tem usuario valido, registra o mesmo na sessão e redireciona para a tela inicial
            if(resp.length >0){
                req.session.usuario = {
                    id: resp[0].id,
                    nome: resp[0].nome,
                    email: resp[0].email
                }
                res.redirect('/catalogo')
            } else{             //se não , retorna tela de login
                res.redirect('/login')
            }
        }
    }
    async logout(req, res) {
        delete req.session.usuario;
        res.redirect('/login');
    };
}

module.exports = UsuarioController;