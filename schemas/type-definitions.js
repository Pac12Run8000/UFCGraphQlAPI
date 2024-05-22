const { gql } = require('apollo-server');

const typeDefs = gql`
  enum PrimaryMartialArt {
    KICKBOXING
    KARATE
    JIU_JITSU
    BRAZILIAN_JIU_JITSU
    MIXED_MARTIAL_ARTS
    WRESTLING
    MUAY_THAI
    BOXING
  }

  type MMAFighter {
    id: ID!
    name: String!
    record: String
    age: Int
    birthDate: String
    primaryMartialArts: [PrimaryMartialArt]
    team: String
    homeTown: String
  }

  type Query {
    fighters: [MMAFighter]
    fighter(id: ID!): MMAFighter
    fightersByHomeTown(homeTown: String!): [MMAFighter]
    fightersByMartialArt(martialArt: PrimaryMartialArt!): [MMAFighter]
  }
`;

module.exports = { typeDefs };
