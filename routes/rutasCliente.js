const express = require('express');
const router = express.Router();
const clientecontroller = require('../controllers/clienteController');

// Estas son las rutas de nuestro crud

router.post('/' , clientecontroller.agregarClientes);
router.get('/' , clientecontroller.buscarClientes);
router.get('/:id', clientecontroller.mostrarCliente);
//router.patch('/:id', clientecontroller.modificarClientes);
router.put('/:id', clientecontroller.actualizarClientes);
router.delete('/:id', clientecontroller.eliminarClientes);



module.exports = router; 