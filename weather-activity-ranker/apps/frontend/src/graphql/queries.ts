import { gql } from "@apollo/client";

export const RANK_CITY = gql`
  query RankCity($city: String!) {
    rankCity(city: $city) {
      date
       weather {
        temperature
        precipitation
        windSpeed
      }
      scores {
        activity
        description
        recommendation 
      }
    }
  }
`;
