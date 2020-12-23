const { Schema, model } = require('mongoose');


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
            precio: Number,
            status: Boolean
        }
    ],
    tipo:{
        type:String,
        default:"checkbox"
    },
    status: Boolean
})

// Esquema Plato
const Menu = new Schema({
    nombre: String,
    precio: Schema.Types.Decimal128,
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



//export models
module.exports.Categoria = model('Categoria', Categoria)
module.exports.Menu = model('Menu', Menu)
module.exports.Plato = model('Plato', Plato)
