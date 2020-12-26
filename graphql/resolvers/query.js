const { Categoria, Menu, Plato } = require('../../mongo/mongoSchema')
module.exports = {
    Query: {

        Categorias: async () => {
            const data = await Categoria.find();
            if (!data.length) {
                return []
            } else {
                return data
            }
        },
        
        Menus: async () => {
            const data = await Menu.find();
            if (!data.length) {
                return []
            } else {
                return data
            }
        },

        Platos:async () => {
            const data = await Plato.find();
            if (!data.length) {
                return []
            } else {
                return data
            }
        },
        CategoriaId: async (_, { IdCategoria }) => {
            let data = await Categoria.findById(IdCategoria).populate('menus');
            return data
            
       },
        MenuId: async (_, { IdMenu }) => {
            let data = await Menu.findById(IdMenu).populate('platos');
            console.log(data)
            return data
            
       },

    }
}