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
            let data = await Categoria.findOne({_id:IdCategoria}).populate('menus');
            return data
            
       },
        MenuId: async (_, { IdNenu }) => {
            let data = await Menu.findOne({_id:IdNenu}).populate('platos');
            return data
            
       },

    }
}