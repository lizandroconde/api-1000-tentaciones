const { ApolloServer } = require('apollo-server');
const { mongoConnect, schema } = require('./utils/app');

const port = 3000;

mongoConnect().then(success => {
    console.log(success);
}).catch(err => {
    console.log(err);
});



const server = new ApolloServer({ schema: schema });

server.listen(port).then(({ url, subscriptionsUrl }) => {
    console.log(`🚀 Server ready at ${url}`);
    console.log(`🚀 Subscriptions ready at ${subscriptionsUrl}`);
  });