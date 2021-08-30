import { gql } from "@apollo/client";

const BE_COACH = gql`
  mutation beCoach(
    $coachingSport: [SportSelection!]!
    $description: String!
    $price: Int!
  ) {
    beCoach(
      coachingSport: $coachingSport
      description: $description
      price: $price
    )
  }
`;

const COACH_FEEDBACK = gql`
  mutation coachFeedback($id: ID!, $message: String!, $rating: Int!) {
    coachFeedback(id: $id, message: $message, rating: $rating) {
      alert
    }
  }
`;

const EDIT_EVENT = gql`
  mutation editEvent(
    $id: ID!
    $eventDate: DateTime
    $maxPlayersAmount: Int
    $private: Boolean
  ) {
    editEvent(
      id: $id
      eventDate: $eventDate
      maxPlayersAmount: $maxPlayersAmount
      private: $private
    ) {
      succeed
      alert
      event {
        eventDate
        eventName
      }
    }
  }
`;

const GET_CONNECTED = gql`
  mutation toggleConnection($id: ID!) {
    toggleConnection(id: $id) {
      succeed
      alert
      athlete {
        name
      }
    }
  }
`;

const NEW_EVENT = gql`
  mutation newEvent(
    $avatar: String
    $eventDate: DateTime!
    $level: SportLevels!
    $location: Location!
    $maxPlayersAmount: Int!
    $sport: SportSelection!
  ) {
    newEvent(
      avatar: $avatar
      eventDate: $eventDate
      level: $level
      location: $location
      maxPlayersAmount: $maxPlayersAmount
      sport: $sport
    ) {
      alert
      succeed
      event {
        id
        eventDate
        eventName
        captain {
          avatar
          favoriteSport
          id
          name
        }
        players {
          id
          name
          avatar
        }
        private
        maxPlayersAmount
        curPlayersAmount
        sport
        level
        location
      }
    }
  }
`;

const SIGN_IN = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password)
  }
`;

const SIGN_UP = gql`
  mutation signUp(
    $avatar: String
    $email: String!
    $favoriteSport: [SportSelection!]!
    $password: String!
    $name: String!
  ) {
    signUp(
      avatar: $avatar
      email: $email
      favoriteSport: $favoriteSport
      password: $password
      name: $name
    )
  }
`;

const TOGGLE_JOIN_EVENT = gql`
  mutation toggleJoinEvent($id: ID!) {
    toggleJoinEvent(id: $id) {
      alert
      succeed
      event {
        id
        curPlayersAmount
        sport
      }
    }
  }
`;

const UPDATE_ATHLETE_EVENTS = gql`
  mutation updateAthleteEvents($id: ID!) {
    updateAthleteEvents(id: $id)
  }
`;

export {
  BE_COACH,
  COACH_FEEDBACK,
  EDIT_EVENT,
  GET_CONNECTED,
  NEW_EVENT,
  SIGN_IN,
  SIGN_UP,
  TOGGLE_JOIN_EVENT,
  UPDATE_ATHLETE_EVENTS,
};
