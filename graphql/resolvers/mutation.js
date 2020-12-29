const channel = require('../../utils/pubsub')

const { Categoria,Menu, Plato, Reserva } = require('../../mongo/mongoSchema')

module.exports = {
    Mutation: {

       createCategoria: async (_, { input }) => {
            const newCategoria = new Categoria(input);
            const data = await newCategoria.save();
            if (data) {
                const ndata = await Categoria.find().populate('menus');
                channel.publish('NEW_CATEGORIA',
                {
                    newCategoria: ndata
                });
                return 1;
            } else {
                return 0;
            }
        },
        createMenu: async (_, { input }) => {
            const newMenu = new Menu(input);
            const data = await newMenu.save();
            if (data) {
                channel.publish('NEW_MENU',
                    data);
                return 1;
            } else {
                return 0;
            }
        },
        createPlato: async (_, { input }) => {
            const newPlato = new Plato(input);
            const data = await newPlato.save();
            if (data) {
                return 1;
            } else {
                return 0;
            }
        },
        createReserva: async (_, { input}) => {
            const newReserva = new Reserva(input);
            const data = await newReserva.save();
            if (data) {
                return 1;
            } else {
                return 0;
            }
        },
        AsigMenu:  async (_, { IdCategoria,IdMenu }) => {
          const data =   await Categoria.findByIdAndUpdate(IdCategoria,{$push:{menus:IdMenu}});
    
            if (data) {
                return 1;
            } else {
                return 0;
            }
        },
        AsigPlato:  async (_, { IdMenu,IdPlato }) => {
            const data =   await Menu.findByIdAndUpdate(IdMenu,{$push:{platos:IdPlato}});
      
              if (data) {
                  return 1;
              } else {
                  return 0;
              }
          },
        AsigTipo:  async (_, { IdPlato,input }) => {
            const data =   await Plato.findByIdAndUpdate(IdPlato,{$push:{tipos:input}});
      
              if (data) {
                  return 1;
              } else {
                  return 0;
              }
          },

    }
}