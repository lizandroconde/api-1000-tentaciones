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
  status: Boolean
}

input PlatoInput{
  nombre: String,
  tipo:String,
  status: Boolean
}
`


module.exports = Input