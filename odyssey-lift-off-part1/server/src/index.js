const { ApolloServer } =  require('apollo-server');
const  typeDefs = require('./schema');
const resolvers = require('./resolevers');
const TrackApi  = require('./datasources/track-api');

const server = new ApolloServer({ typeDefs,resolvers:resolvers,dataSources:()=>{
  return {
    TrackApi:new TrackApi()
  }
} });

server.listen().then(({url}) => {
    console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
  `);
});