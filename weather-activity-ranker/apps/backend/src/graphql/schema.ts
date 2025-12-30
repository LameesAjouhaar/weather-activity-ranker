import { gql } from "apollo-server";

export const typeDefs = gql`

 type Weather {
    temperature: Float!
    precipitation: Float!
    windSpeed: Float!
  }

  type ActivityScore {
    activity: String!
    score: Int!
    description: String!
    recommendation: String!
  }

  type DayRanking {
    date: String!
    weather: Weather!
    scores: [ActivityScore!]!
  }

  type Query {
    rankCity(city: String!): [DayRanking!]!
  }
`;
