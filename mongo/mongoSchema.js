const { Schema, model } = require('mongoose') 
const mongoose = require("mongoose")
require('mongoose-double')(mongoose)


// Esquema Categoria
const Categoria = new Schema({
    nombre: String,
    imagen: String,
    status: Boolean,
    menus: [{
        type: Schema.Types.ObjectId,
        ref: "Menu"
    }]
})


const Plato = new Schema({
    nombre: String,
    tipos:[
        {
            nombre: String,
            precio: Schema.Types.Double,
            status: Boolean,
            cod: String
        }
    ],
    tipo:{
        type:String,
        default:"checkbox"
    },
    status: Boolean,
    necesario: Boolean

})

// Esquema Plato
const Menu = new Schema({
    nombre: String,
    precio: {
        type: Schema.Types.Double
    },
    tiempo: String,
    descripcion: String,
    imagen: String,
    status: Boolean,
    platos: [{
        type: Schema.Types.ObjectId,
        ref: "Plato"
    }],
    IdCategoria:{
        type: Schema.Types.ObjectId,ref:"Categoria"
    } 
})


// Reservas 

const Reserva = new Schema({
    nombre: String,
    direccion: String,
    contacto: String,
    menus:[{
        IdMenu:{
            type: Schema.Types.ObjectId,
            ref: "Plato"
        },
        precio: {
            type: Schema.Types.Double
        },
        cantidad:Number
    }],
    metodo: String
})


//export models
module.exports.Categoria = model('Categoria', Categoria)
module.exports.Menu = model('Menu', Menu)
module.exports.Plato = model('Plato', Plato)
module.exports.Reserva = model('Reserva', Reserva)
