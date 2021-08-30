import React from "react";
import { Alert } from "react-native";
import { useMutation } from "@apollo/client";

import RoundIconButtonText from "../../layouts/RoundIconButtonText";

import { TOGGLE_JOIN_EVENT } from "../../../api/gql/mutation";
import {
  GET_EVENTS,
  GET_MY_EVENTS,
  GET_EVENT_PLAYERS,
} from "../../../api/gql/query";

const JoinEvent = ({
  event,
  isParticipant,
  text,
  size = 60,
  ...otherProps
}) => {
  const [toggleJoinEvent] = useMutation(TOGGLE_JOIN_EVENT, {
    refetchQueries: [{ query: GET_MY_EVENTS }, { query: GET_EVENT_PLAYERS }],
    onError: (error) =>
      Alert.alert(
        error.message,
        "Seems like there is a high demand to the event, try creating your own."
      ),
  });

  return (
    <RoundIconButtonText
      backgroundSize={size}
      iconName={
        isParticipant ? "account-multiple-minus" : "account-multiple-plus"
      }
      onPress={() => toggleJoinEvent({ variables: { id: event.id } })}
      text={isParticipant ? "Exit" : "Join"}
      {...otherProps}
    />
  );
};

export default JoinEvent;

/*
import { useNavigation } from "@react-navigation/core";

  const navigation = useNavigation();
  let navigateTo = () =>
    navigation.navigate(routes.EVENTS_FEED, {
      variables: { event, isParticipant },
    });

  if (isParticipant) {
    navigateTo = () => navigation.navigate(routes.MY_PROFILE);
  }

*/
