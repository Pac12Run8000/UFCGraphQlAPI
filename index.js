const { ApolloServer } = require("apollo-server");
const { typeDefs } = require('./schemas/type-definitions');
const { resolvers } = require('./schemas/resolvers');


const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true, // Ensure introspection is explicitly enabled
  });
  

server.listen().then(({ url }) => {
    console.log(`Your App Is Running: ${url}`)
})