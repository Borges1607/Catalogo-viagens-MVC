const usuariodb = require('../models/usuariosdb');
const md5 = require('md5');

class UsuarioController{
    async autenticar(req, res){
        if(req.body.email == "" || req.body.senha == ""){
            console.log("preencha todos os campos");
        } else{
            let resp = await usuariodb.autenticar(req.body.email, md5(req.body.senha))
            if(resp.length >0){
                req.session.usuario = {
                    id: resp[0].id,
                    nome: resp[0].nome,
                    email: resp[0].email
                }
                res.redirect('/cardapio')
            } else{
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