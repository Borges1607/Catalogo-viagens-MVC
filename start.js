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
app.set("layout", "./layouts/defaul/index");
app.set("views engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  if (!req.session.usuario) {
    if (req.originalUrl == "/login" || req.originalUrl == "/autenticar") {
      app.set("layout", "./layout/default/login");
      res.locals.layoutsVariables = {
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
    res.locals.layoutsVariables = {
      url: process.env.URL,
      img: "/img/",
      style: "/css/",
      title: "catálogo",
      usuario: req.session.usuario,
    };
    next();//continua para prox. etapa(rota ou middleware)
  }
});

//rotas
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/login", (req,res) =>{
    app.set('layout', './layouts/default/login')
    usuarioController.login(req, res);
});
app.post('/login', (req, res) =>{
    usuarioController.autenticar(req,res);
});
app.get('/catalogo/delete/:id', (req, res)=>{
    viagensController.deleteViagem(req,res);
});
app.get('/viagens', viagensController.getViagens);
app.post('/viagem', viagensController.addViagem);
app.delete('/viagem/:id', viagensController.deleteViagem);
app.put('/viagem/:id', viagensController.updateViagem);

app.listen(port, () =>{
    console.log(`Servidor rodando na porta ${port}`);
});
