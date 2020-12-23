const Query = `

type Query {
    Categorias: [Categoria],
    Menus: [Menu],
    Platos: [Plato],
    CategoriaId(IdCategoria:String): Categoria,
    MenuId(IdMenu:String): Categoria,
  }
  

`

module.exports = Query;