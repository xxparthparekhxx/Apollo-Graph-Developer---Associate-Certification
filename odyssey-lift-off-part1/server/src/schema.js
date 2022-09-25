const { gql }  =require('apollo-server');

const typeDefs = gql`  
type Query {
    tracksForHome: [Track!]!
    Track:Track
}

" A Track is a group of modules that teaches about a specific topic. "
type Track{ 
    id: ID!
    "the track's title"
    title:String!
    "the track's main author "
    author: Author!
    "the track's illustration to display in tracks card or tracks page"
    thumbnail: String
    "The track's approximate duration in minutes"
    length: Int
    "The number of modules this track contains"
    modulesCount: Int
}

" An Author is the creator of a track. "
type Author{
    id: ID!
    "the author's name"
    name: String!
    "the authors profile picture url"
    photo: String
}
`;

module.exports= typeDefs;