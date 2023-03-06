const express = require('express');
const routes = express.Router();
const filme =  require ('./src/Controllers/FilmeController')
//Routes index

routes.get("/", (req, res) => {
    try {
        res.send("Bem vindo a minha lista de Cinema")
    } catch {
        console.log("Problema ao carregar rota.")

    }
})

routes
.get("/filmes", filme.listarFilme)
.post("/filmes", filme.criarFilme)
.get("/filmes/:id", filme.listarFilmeUnico)
.put("/filmes/:id", filme.editarFilme)
.delete("/filmes/:id", filme.deletarFilme)

module.exports = routes