const express = require('express');
const app = express();
const routes = require('./router');
const conection = require('./src/config/conection');




conection.sync({ force: true }).then(() => console.log('Banco Rodando!!'));
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(routes);



app.listen(3000, ()=>{
    console.log("Servidor Rodando!!");
});
