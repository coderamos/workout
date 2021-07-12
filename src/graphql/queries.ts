import { gql } from 'graphql-request';

export const GET_CREATORS = gql`
  query getCreators {
    creators {
      id
      name
      description
      avatar {
        width
        height
        url
      }
    }
  }
`;

export const GET_PLACES = gql`
  query getPlaces {
    places {
      id
      slug
      name
      description
      location {
        latitude
        longitude
      }
      date
      population
      averageSalary
      gallery {
        url
        width
        height
      }
      stacks {
        name
        openPositions
        annualAverageSalary
      }
    }
  }
`;

export const GET_PLACE_BY_SLUG = gql`
  query getPlaceBySlug($slug: String) {
    place(where: { slug: $slug }) {
      id
      slug
      name
      description
      location {
        latitude
        longitude
      }
      date
      population
      averageSalary
      gallery {
        url
        width
        height
      }
      stacks {
        name
        openPositions
        annualAverageSalary
      }
    }
  }
`;
