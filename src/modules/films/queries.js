import { gql } from "@apollo/client";

export const GET_ALL_FILMS = gql`
  query GET_ALL_FILMS {
    allFilms {
      films {
        id
        title
        releaseDate
      }
    }
  }
`;

export const GET_FILM_DETAIL = gql`
  query GET_FILM_DETAIL($filmId: ID) {
    film(id: $filmId) {
      director
      openingCrawl
      title
      producers
      planetConnection {
        planets {
          id
          name
          diameter
        }
      }
      characterConnection {
        characters {
          id
          name
          height
          hairColor
        }
      }

      starshipConnection {
        starships{
          name
          id
          model
          starshipClass
        }
      }

    }
  }
`;

/* export const GET_CHARACTER_DETAILS = gql`
  query GET_CHARACTER_DETAILS {
    allfilms {
      films {
        name
        height
        hairColor
        birthYear
        homeworld {
          name
        }
      }
    }
  }
`;


export const GET_STARSHIP_DETAILS = gql`
query Starships{
  query allFilms {
    films {
      starshipConnection {
        starships {
          name
          model
          passengers
          starshipClass
          id
          cargoCapacity
        }
      }
    }
  }
}
`; */