
const channel = require('../../utils/pubsub');

module.exports = {
    Subscription: {

        newCategoria: {
            subscribe: () => channel.asyncIterator('NEW_CATEGORIA'),
            resolve: (payload) => {
        
                return payload.newCategoria;
            },
        },
        newMenu: {
            subscribe: () => channel.asyncIterator('NEW_MENU'),
            resolve: (payload) => {
                // Manipulate and return the new value
                const data = [{ name: "wilbert" }, { name: "otro" }]
                
                return data;
            },
        },

    }
}