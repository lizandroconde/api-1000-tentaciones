//const { PubSub } = require('apollo-server')
const { Subscription } = require('./resolvers/subscription')
const { Mutation } = require('./resolvers/mutation')
const { Query } = require('./resolvers/query')

//const { User } = require('../mongo/mongoSchema')
//const pubsub = new PubSub();
//const NEW_USER = 'NEW_USER';
/*
const resolvers = {

    Query: {
        User: async () => {
            const data = await User.find();
            if (!data.length) {
                return []
            } else {
                return data
            }
        }
    },

    Mutation: {
        createUser: async (_, { input }) => {
            const newUser = new User(input);
            const data = await newUser.save();
            if (data) {
                pubsub.publish(NEW_USER,
                    {
                        newUser: data
                    });
                return 1;
            } else {
                return 0;
            }
        }
    },

    Subscription: {
        newUser: {
            subscribe: () => pubsub.asyncIterator(NEW_USER),
            resolve: (payload) => {
                // Manipulate and return the new value
                return payload.newUser;
            },
        }
    }

};
*/

const resolvers = {
    Query,
    Mutation,
    Subscription
}

module.exports = resolvers;