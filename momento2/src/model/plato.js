// utilizar biblioteca de Mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema; // estructura de la coleccion a trabajar (plato)

const PlatoSchema = Schema({
    nombre: String,
    descripcion: String,
    precio: Number,
    status: {
        type:Boolean,
        default:false
    }
})

module.exports=mongoose.model('platos',PlatoSchema)