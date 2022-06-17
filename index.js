const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./db/config");
require('dotenv').config(); 

//crear el servidor de aplicacion express
const app  = express();

//Base de datos
dbConnection();

//Directorio publico
app.use(express.static('public'));

// middleware  CORS
app.use(cors());

// middleware  Lectura y parseo del body
app.use(express.json());

//Rutas
app.use('/api/auth', require('./routes/auth'));

app.listen( process.env.PORT, ()=>{
    console.log(`servidor corriendo en el puerto ${ process.env.PORT }`);
} )