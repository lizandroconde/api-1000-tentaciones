const Input = `
input CategoriaInput {
  nombre:String,
  imagen:String,
  status: Boolean
}

input PlatosInput{
  _id: ID
}


input MenuInput {
  nombre: String,
  precio: Float,
  tiempo: String,
  descripcion: String,
  imagen: String,
  status: Boolean
}


input TipoInput {
  nombre: String,
  precio: Float,
  status: Boolean,
  cod:String
}




input PlatoInput{
  nombre: String,
  necesario: Boolean,
  tipo:String,
  status: Boolean
}

input TiposRInput{
  nombre: String,
  precio: Float,
  cod:String
}

input PlatosRInput{
  nombre: String,
  tipos:[TiposRInput]
}

input MenuRInput{
  menu: ID,
  platos: [PlatosRInput],
  precio: Float,
  cantidad: Int
}

input ReservaInput{
  nombre: String,
  direccion: String,
  contacto: String,
  metodo: String,
  menus:[MenuRInput]
}
`


module.exports = Input