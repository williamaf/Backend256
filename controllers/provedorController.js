const Provedor = require('../models/provedor');

// Función para agregar provedores
exports.agregarProvedores = async (req, res) => {
    try {
        let provedores;
        provedores = new Provedor(req.body);
        await provedores.save();
        res.json(provedores);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo Un Error Al Agregar Un Proveedor');
    }
};

// Función para buscar proveedores
exports.buscarProvedores = async (req, res) => {
    try {
        const provedores = await Provedor.find();
        res.json(provedores);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo Un Error Al Mostrar Los Proveedores');
    }
};

// Función para buscar un proveedor
exports.mostrarProvedor = async (req, res) => {
    try {
        let provedores = await Provedor.findById(req.params.id);
        if (!provedores) {
            res.status(404).send({ msg: "Provedor No Encontrado Con Ese ID" });
            return
        } 
            res.json(provedores);
        
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo Un Error Al Mostrar Un Provedor');
    }
};

// Función para modificar proveedor con el método patch
exports.modificarProvedores = async (req, res) => {
    try {
        const provedores = await Provedor.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!provedores) {
            res.status(404).send({ msg: "Provedor no encontrado con ese ID" });
        } else {
            res.json(provedores);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo Un Error Al Modificar El Provedor');
    }
};

exports.actualizarProvedores = async (req, res) => {
    try {
        const provedores = await Provedor.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        if (!provedores) {
            res.status(404).send({ msg: "Provedor no encontrado con ese ID" });
        } else {
            res.json(provedores);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo Un Error Al Actualizar Los Provedores');
    }
};

exports.eliminarProvedores = async (req, res) => {
    try {
      const provedor = await Provedor.findById(req.params.id);
      if (!provedor) {
        return res.status(404).send({ message: 'Provedor no encontrado con ese ID' });
      }
      await Provedor.deleteOne({ _id: req.params.id });
      // o await provedor.remove();
      res.json({ message: 'Provedor eliminado correctamente' });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: 'Error interno del servidor', error: error.message });
    }
  };