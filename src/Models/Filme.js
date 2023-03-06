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
    nome_Filme: {
        type: DataTypes.STRING,
        allowNull : false
    },
    sinopse:{
        type: DataTypes.STRING,
    },
    data_acesso:{
        type: DataTypes.DATE,
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