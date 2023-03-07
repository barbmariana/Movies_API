const ModelFilme = require ('../models/Filme');

module.exports = {

    async listarFilme(req,res) {
        try {
            const filmes= await ModelFilme.findAll();
            return res.json(filmes)
        } 
        catch (error) {
            console.log("Error ao encontrar filme");
        }
    }, 
    async criarFilme (req,res) {
        try {
            const filme = await ModelFilme.create({
                id_filme: req.body.id_filme,
                nome_filme: req.body.nome_filme,
                diretor: req.body.diretor,
                genero: req.body.genero,
                data_acesso: req.body.data_acesso,
                data_lancamento: req.body.data_lancamento,
                local_disponivel: req.body.local_disponivel
            })
        return res.json(filme)
        } catch{
            console.log (`Erro ao cadastrar filme`)
        }
    },
    async listarFilmeUnico(req,res) {
        try{
            const id =  req.params.id
            const filme = await ModelFilme.findByPk(id);
            return res.json(filme)
        }
        catch(error){
            console.log(error + `Erro ao encontrar filme de id ${id}`)
        }
    },
    async editarFilme(req,res){
        try{
            const id=req.params.id
            await ModelFilme.update({
                id_filme: req.body.id_filme,
                nome_filme: req.body.nome_filme,
                diretor: req.body.diretor,
                genero: req.body.genero,
                data_acesso: req.body.data_acesso,
                data_lancamento: req.body.data_lancamento,
                local_disponivel: req.body.local_disponivel}, {
                    where: { 
                        id_filme:id
                    }
                })
        const filme = await ModelFilme.findByPk(id)
        return res.json(filme)
        }
        catch(error){
            console.log(error + `Erro ao dar update no filme de id: ${id}`)
        }
    },
    async deletarFilme (req,res){
        try{
            const id=req.params.id
            await ModelFilme.destroy({
            where:{
                id_filme:id
            }
            })
            const filme = ModelFilme.findAll();
            return res.json(filme)
        }
        catch(error){
            console.log(error + `Erro ao deletar filme de Id: ${id}`)
        }
    }
}