const express = require('express');
const conectarBD = require('../config/db')
const cors = require('cors');

// creamos la variable app
const app = express();
const port =  process.env.PORT || 5000;

//conexion bases de datos
conectarBD();
app.use(cors());
app.use(express.json());

//ruta para consumir la api cliente
app.use('/api/clientes', require('../routes/rutasCliente'));

// Ruta para consumir la API de proveedores
app.use('/api/provedores', require('../routes/rutasProvedor'));


//vamos acrear la ruta para verificar nuestro servidor en la web
app.get('/', (req, res) => {
    res.send("Hola Estamos Conectados a la Web")
});

//vamos a crear la ruta de nuestro servidor local
app.listen(port, () => {
    console.log("El Servidor Esta Conectado http://localhost:5000/")
});