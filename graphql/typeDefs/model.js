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
  status: Boolean
}

type Plato{
  _id:ID,
  nombre: String,
  tipos:[Tipo],
  tipo:String,
  status: Boolean
}
`



module.exports = Model