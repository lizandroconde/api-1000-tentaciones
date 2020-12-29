const Query = `

type Query {
    Categorias: [Categoria],
    Menus: [Menu],
    Platos: [Plato],
    Reservas: [Reserva],
    CategoriaId(IdCategoria:String): Categoria,
    MenuId(IdMenu:String): Menu,
  }
  

`

module.exports = Query;