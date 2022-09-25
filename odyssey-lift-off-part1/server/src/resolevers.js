const resolvers = {
    Query: {
      tracksForHome:   async () => {
        const baseUrl = "https://odyssey-lift-off-rest-api.herokuapp.com";
        const res = await fetch(`${baseUrl}/tracks`);
        return res.json();
      },
    },
    Track: {
      // using fetch instead of dataSources
      author: async ({ authorId }, _, { dataSources }) => {
        const baseUrl = "https://odyssey-lift-off-rest-api.herokuapp.com";
        const res = await fetch(`${baseUrl}/author/${authorId}`);
        return res.json();
  
        // return dataSources.trackAPI.getAuthor(authorId);
      },
    },
  }

module.exports = resolvers;