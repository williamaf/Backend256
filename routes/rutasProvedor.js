const express = require('express');
const router = express.Router();
const provedorController = require('../controllers/provedorController');

// Estas son las rutas del CRUD para provedores

router.post('/', provedorController.agregarProvedores);
router.get('/', provedorController.buscarProvedores);
router.get('/:id', provedorController.mostrarProvedor);
//router.patch('/:id', provedorController.modificarProvedores);
router.put('/:id', provedorController.actualizarProvedores);
router.delete('/:id', provedorController.eliminarProvedores);

module.exports = router;