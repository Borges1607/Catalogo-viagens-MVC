const express = require("express");
const path = require('path');
const expressLayouts = require("express-ejs-layouts");
const session = require("express-session");

const viagensController = require("./controller/viagensController");
const usuarioController = require("./controller/usuarioController");

const app = express();
const port = 5000;

app.use(express.static(path.join(__dirname, 'public')))
app.use(session({resave:true,saveUninitialized:true, secret:'1'}));
app.use(expressLayouts);
app.set("layout", "./layouts/default/index");
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  if (!req.session.usuario) {
    if (req.originalUrl == "/login" || req.originalUrl == "/cadastro") {
      app.set("layout", "./layouts/default/login");
      res.locals.layoutVariables = {
        url: process.env.URL,
        img: "/img/",
        style: "/css/",
        title: "Login",
        usuario: req.session.usuario,
      };
      next();
    } else {
      res.redirect("/login");
    }
  } else {
    app.set("layout", "./layouts/default/index");
    res.locals.layoutVariables = {
      url: process.env.URL,
      img: "/img/",
      style: "/css/",
      title: "catálogo",
      usuario: req.session.usuario,
    };
    next();
  }
});

//rotas
app.get("/login", (_req,res) => res.render("loginView"));
app.post('/login', usuarioController.autenticar);

app.get('/cadastro',(_req,res) => res.render("cadastro"));
app.post('/cadastro', usuarioController.cadastrarUsuario);

app.get('/viagens', viagensController.getViagens);
app.post('/viagem', viagensController.addViagem);

app.post('/viagem/delete', viagensController.deleteViagem);
app.get('/viagem/editar/:id(\\d+)', viagensController.editViagem);
app.post('/viagem/update', viagensController.updateViagem)

app.listen(port, () =>{
    console.log(`Servidor rodando na porta ${port}`);
});
