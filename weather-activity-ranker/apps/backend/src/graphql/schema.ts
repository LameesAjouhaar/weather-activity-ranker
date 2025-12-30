import { gql } from "apollo-server";

export const typeDefs = gql`
  type ActivityScore {
    activity: String!
    score: Int!
    description: String!
  }

  type DayRanking {
    date: String!
    scores: [ActivityScore!]!
  }

  type Query {
    rankCity(city: String!): [DayRanking!]!
  }
`;
