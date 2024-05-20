const { gql } = require('apollo-server');

const typeDefs = gql`
  type MMAFighter {
    id: ID!
    name:String!
    record: String
    age: Int
    birthDate: String
    primaryMartialArt: String
    team: String
    homeTown: String
  }

  type Query {
    fighters: [MMAFighter]
    fighter(id: ID!): MMAFighter
    fightersByHomeTown(homeTown: String!): [MMAFighter]
    fightersByMartialArt(martialArt: String!): [MMAFighter]
  }
`;

module.exports = { typeDefs };
