const dbusuarios = [{
    id: 1,
    nome:'João',
    email:'joao@gmail.com',
    senha:'25d55ad283aa400af464c76d713c07ad' //12345678
},{
    id: 2,
    nome:'Evandro',
    email:'evandro@gmail.com',
    senha:'e8d95a51f3af4a3b134bf6bb680a213a' //senha
},{
    id: 3,
    nome:'Eduardo',
    email: 'eduardo@gmail.com',
    senha: 'e8d95a51f3af4a3b134bf6bb680a213a' //senha
},{
    id: 4,
    nome: 'Cândido',
    email:'candido@gmail.com',
    senha:'25d55ad283aa400af464c76d713c07ad' //12345678
}
]

class Usuario{
static async autenticar (email, senha){
    const usuario = dbusuarios.find(
        u => u.email === email && u.senha === senha
      );
    
      if (usuario) {
        return usuario;
      } else {
        return null; // Credenciais inválidas
      }
}
}

module.exports = Usuario;