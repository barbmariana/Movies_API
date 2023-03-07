const Sequelize = require('sequelize');


const conection = new Sequelize('filmes', 'root', '', {
    host: './db.sqlite',
    dialect: 'sqlite'
  });

module.exports = conection;