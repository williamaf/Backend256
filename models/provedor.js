const mongoose = require('mongoose');

// El modelo que se crea aquí debe ser igual a la base de datos
const provedorSchema = mongoose.Schema({

    nombres: {
        type: String,
        required: true
    },

    apellidos: {
        type: String,
        required: true
    },

    nit: {
        type: Number,
        required: true
    },

    correo: {
        type: String,
        required: true
    },

    telefono: {
        type: Number,
        required: true
    },

    direccion: {
        type: String,
        required: true
    },

    empresa: {
        type: String,
        required: true
    },

}, { versionKey: false });

module.exports = mongoose.model('Provedor', provedorSchema);