const Cliente = require('../models/Cliente');

//funcion para buscar los clientes que estan en la base de datos

exports.agregarClientes = async (req, res) => {
    try {
        let clientes;
        clientes = new Cliente(req.body)
        await clientes.save();
        res.json(clientes);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo Un Error Al Agregar Un Cliente')

    }

}
// funcion buscar clientes

exports.buscarClientes = async(req, res) =>{
    try {
        const clientes = await Cliente.find();
        res.json(clientes);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo Un Error Al Mostar Los Clientes');
    }
}

// funcion buscar un cliente

exports.mostrarCliente = async(req, res)=>{
    try {
        let clientes = await Cliente.findById(req.params.id);
        if(!clientes){
            res.status(404).send({msg: "Cliente No Encontrado Con Ese ID"});
        }else{
            res.json(clientes);
        }
        
    } catch (error) {
        res.status(500).send('Hubo Un Error Al Mostar Un Cliente');
        
    }
}

// funcion modificar cliente con el metodo patch

exports.modificarClientes = async (req, res)=>{
    try {
        const clientes = await Cliente.findByIdAndUpdate(req.params.id, req.body, {new:true});
        if(!clientes){
            res.status(404).send({msg: "cliente no encontrado con ese ID"});
        }else{
            res.json(clientes);
        }
    

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo Un Error Al Modificar El Cliente');
        
    }
}

exports.actualizarClientes = async(req, res)=>{
    try {
        const clientes = await Cliente.findOneAndUpdate({_id: req.params.id}, req.body, {new:true});
        if(!clientes){
            res.status(404).send({msg: "cliente no encontrado con ese ID"});
        }else{
            res.json(clientes);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo Un Error Al Actualizar los Clientes');
        
    }
}

exports.eliminarClientes = async (req, res) => {
    try {
      const cliente = await Cliente.findById(req.params.id);
      if (!cliente) {
        return res.status(404).send({ message: 'Cliente no encontrado con ese ID' });
      }
      await Cliente.findOneAndDelete({ _id: req.params.id });
      res.json({ message: 'Cliente eliminado correctamente' });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: 'Error interno del servidor', error: error.message });
    }
  };