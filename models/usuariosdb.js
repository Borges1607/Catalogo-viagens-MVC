
class Usuario{
static async autenticar (email, senha){
    const usuario = dbusuarios.find(
        u => u.email === email && u.senha === senha
      );
    
      if (usuario) {
        return usuario;
      } else {
        return null; //Dados inválidas
      }
}
}

module.exports = Usuario;