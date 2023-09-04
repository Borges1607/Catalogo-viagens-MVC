const express = require("express");
const ejs = require("ejs");
const express_ejs = require("express-ejs-layouts");
const session = require("express-session");
const path = require("path");

const pratosController = require("./Controller/pratosController");
const usuarioController = require("./Controller/usuarioControler");

const app = express();
const port = 5000;

app.use(session(express_ejs));
app.set("layout", "./layouts/default/index");
app.set("views engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

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
    next();
  }
});

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/login", (req,res) =>{
    app.set('layout', './layouts/default/login')
});
app.post('/login', (req, res) =>{
    usuarioController.autenticar(req,res)
})
app.get('/catalogo/delete/:id', (req, res)=>{
    viagensController.deleteViagem(req,res)
})
app.get('/viagens', viagensController.getViagens)
app.post('/viagem', viagensController.addViagem)
app.delete('/viagem/:id', viagensController.deleteViagem)
app.put('/viagem/:id', viagensController.updateViagem)

app.listen(port, () =>{
    console.log(`Servidor rodando na porta ${port}`)
})
