class Usuario{
  constructor(id_usuario, nome, email, senha){
      this.id_usuario=id_usuario;
      this.nome=nome;
      this.email=email;
      this.senha=senha;
  }

  static autenticar(email, senha){
      const md5 = require('md5');
      let sql = `SELECT * FROM usuario WHERE email='${email}' AND senha='${md5(senha)}' `;
      console.log(sql);
  }
}

module.exports = Usuario;