const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/conection');

class Filme extends Model { }

Filme.init({
    id_filme: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome_filme: {
        type: DataTypes.STRING,
    },
    diretor:{
        type: DataTypes.STRING,
    },
    genero:{
        type: DataTypes.STRING,
    },
    data_acesso:{
        type: DataTypes.STRING,
    },
    data_lancamento:{
        type: DataTypes.NUMBER,
    },
    local_disponivel:{
        type: DataTypes.STRING,
    }


}, {
    sequelize,
     modelName: 'filmes',
     timestamps: false
})



module.exports = Filme ;

//{
    // "id_filme":1,
    // "nome_filme":"O lado bom da vida",
    // "diretor": "David O. Russell",
    // "genero":"dramédia",
    // "data_acesso":"2013-02-08",
    // "data_lancamento":2013,
    // "local_disponivel" :"Netflix"