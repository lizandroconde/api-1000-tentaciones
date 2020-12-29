const Mutation = `
type Mutation{
    createCategoria(input: CategoriaInput):Int,
    createMenu(input: MenuInput):Int,
    createPlato(input: PlatoInput):Int,
    createReserva(input: ReservaInput):Int,
    AsigMenu(IdCategoria: ID, IdMenu:ID):Int,
    AsigPlato(IdMenu: ID, IdPlato:ID):Int,
    AsigTipo(IdPlato: ID, input: TipoInput):Int

  }


`


module.exports = Mutation