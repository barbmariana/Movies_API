const Sequelize = require('sequelize');


const conection = new Sequelize('cinema', 'root', '', {
    host: './db.sqlite',
    dialect: 'sqlite'
  });

module.exports = conection;