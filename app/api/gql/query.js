import { gql } from "@apollo/client";

const GET_ME = gql`
  query Me {
    Me {
      avatar
      connection {
        id
        avatar
        name
      }
      favoriteSport
      id
      isCoach
      name
      upcomingEvents {
        captain {
          avatar
          favoriteSport
          id
          name
        }
        curPlayersAmount
        eventDate
        eventName
        id
        level
        location
        maxPlayersAmount
        private
        sport
      }
      pastEvents {
        curPlayersAmount
        eventDate
        id
        level
        location
        sport
      }
    }
  }
`;

const GET_ATHLETE = gql`
  query Athlete($id: ID!) {
    Athlete(id: $id) {
      avatar
      connection {
        avatar
        id
        name
      }
      favoriteSport
      id
      name
      upcomingEvents {
        captain {
          avatar
          favoriteSport
          name
          id
        }
        curPlayersAmount
        eventName
        eventDate
        id
        level
        location
        maxPlayersAmount
        players {
          id
          name
          avatar
        }
        sport
      }
    }
  }
`;

const GET_ATHLETES = gql`
  query Athletes($cursor: String) {
    Athletes(cursor: $cursor) {
      cursor
      hasNextPage
      athletes {
        id
        name
        favoriteSport
        avatar
        createdAt
        upcomingEvents {
          captain {
            avatar
            name
            id
          }
        }
      }
    }
  }
`;

const GET_COACH = gql`
  query Coach($id: ID!) {
    Coach(id: $id) {
      athlete {
        avatar
        connectionsCount
        favoriteSport
        id
        name
      }
      coachingSport
      description
      feedback {
        athlete {
          avatar
          id
          name
        }
        message
        rating
        id
      }
      id
      gallery
      price
      rating
      ratingCount
      schedule
    }
  }
`;

const GET_COACHES = gql`
  query Coaches($cursor: String) {
    Coaches(cursor: $cursor) {
      coaches {
        athlete {
          avatar
          id
          name
        }
        coachingSport
        description
        id
        price
        rating
        ratingCount
      }
    }
  }
`;

const GET_EVENT = gql`
  query Event($id: ID!) {
    Event(id: $id) {
      captain {
        avatar
        favoriteSport
        id
        name
      }
      curPlayersAmount
      eventName
      eventDate
      id
      level
      location
      maxPlayersAmount
      players {
        id
        name
        avatar
      }
      sport
    }
  }
`;

const GET_EVENT_PLAYERS = gql`
  query Event($id: ID!) {
    Event(id: $id) {
      captain {
        avatar
        id
        name
      }
      players {
        id
        name
        avatar
      }
    }
  }
`;

const GET_EVENTS = gql`
  query Events($cursor: String, $sports: [SportSelection]) {
    Events(cursor: $cursor, sports: $sports) {
      cursor
      hasNextPage
      events {
        captain {
          avatar
          favoriteSport
          id
          name
        }
        curPlayersAmount
        id
        eventDate
        eventName
        level
        location
        maxPlayersAmount
        private
        sport
      }
    }
  }
`;

const GET_MY_CONNECTIONS = gql`
  query Me {
    Me {
      id
      name
      connection {
        id
        avatar
        name
      }
    }
  }
`;

const GET_MY_EVENTS = gql`
  query Me {
    Me {
      id
      avatar
      name
      upcomingEvents {
        id
        eventDate
        eventName
        curPlayersAmount
        maxPlayersAmount
        sport
        captain {
          avatar
          id
          favoriteSport
          name
        }
        players {
          id
          name
        }
      }
    }
  }
`;

const IS_LOGGED_IN = gql`
  {
    isLoggedIn @client
  }
`;

const IS_ME = gql`
  {
    me @client
  }
`;

export {
  GET_ME,
  GET_ATHLETE,
  GET_ATHLETES,
  GET_COACH,
  GET_COACHES,
  GET_EVENT,
  GET_EVENT_PLAYERS,
  GET_EVENTS,
  GET_MY_CONNECTIONS,
  GET_MY_EVENTS,
  IS_LOGGED_IN,
  IS_ME,
};
