const { model } = require("mongoose")

const Model = `
type Categoria {
    _id:ID,
    nombre:String,
    imagen:String,
    status:Boolean,
    menus: [Menu]
  }



type Menu {
  _id:ID,
  nombre: String,
  precio: Float,
  tiempo: String,
  descripcion: String,
  imagen: String,
  status: Boolean,
  platos: [Plato]
}

type Tipo {
  _id:ID,
  nombre: String,
  precio: Float,
  status: Boolean,
  cod: String
}

type Plato{
  _id:ID,
  nombre: String,
  necesario: Boolean,
  tipos:[Tipo],
  tipo:String,
  status: Boolean
}


type Tipos{
  _id:ID,
  nombre: String,
  precio: Float,
  cod: String
}

type Platos{
  nombre: String,
  tipos:[Tipos]
}


type Menus{
  menu: Menu,
  precio: Float,
  cantidad: Int,
  platos: [Platos]
}


type Reserva{
  _id:ID,
  nombre: String,
  direccion: String,
  contacto:String,
  hora: String,
  fecha: String,
  menus:[Menus],
  metodo: String
}


`



module.exports = Model