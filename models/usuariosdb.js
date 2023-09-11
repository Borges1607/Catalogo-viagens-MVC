const db= require('./db');
const md5 = require('md5');

class Usuario{
  constructor(id_usuario, nome, email, senha){
      this.id_usuario=id_usuario;
      this.nome=nome;
      this.email=email;
      this.senha=senha;
  }

  static async autenticar(email, senha){
      let sql = `SELECT * FROM usuario WHERE email='${email}' AND senha='${md5(senha)}'; `;
      console.log(sql);
      return await db.query(sql);
  }
  static async cadastrar(nome, email, senha){
      return await db.query(`INSERT INTO usuario (nome, email, senha) values ('${nome}', '${email}', '${md5(senha)}');`);
  }
}

module.exports = Usuario;