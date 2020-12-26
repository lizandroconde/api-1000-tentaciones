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

type Menus{
  IdMenu: ID,
  precio: Boolean,
  cantidad: Int
}

type Reserva{
  _id:ID,
  nombre: String,
  direccion: String,
  contacto:String,
  menus:[Menus],
  metodo: String
}


`



module.exports = Model