import React from "react";
import { useNavigation, useRoute } from "@react-navigation/core";
import { View, StyleSheet, Image, SafeAreaView } from "react-native";
import { format } from "date-fns";
import { ScrollView } from "react-native-gesture-handler";
import { useQuery } from "@apollo/client";

import IconWithText from "../layouts/IconWithText";
import JoinEvent from "./EventActions/JoinEvent";
import NavigateToEvent from "./EventActions/NavigateToEvent";
import ShowEventPlayers from "../athletes/ShowEventPlayers";
import SportsIcon from "../layouts/SportsIcon";
import Text from "../layouts/Text";

import { GET_EVENT_PLAYERS } from "../../api/gql/query";

import colors from "../../config/colors";

const EventPage = ({ isParticipant = false }) => {
  const route = useRoute();
  const event = route.params.event;
  const sport = event.sport;
  const date = new Date(event.eventDate);
  const iconSize = 25;
  console.log(event.captain);
  const { data, error, loading } = useQuery(GET_EVENT_PLAYERS, {
    variables: { id: event.id },
    fetchPolicy: "network-only",
  });

  return (
    <View style={[styles.container]}>
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.eventName}>{event.eventName}</Text>
          <Text style={styles.evetnDetails}>{event.eventName}</Text>
        </View>
        <View style={styles.joinBtn}>
          <JoinEvent event={event} isParticipant={isParticipant} />
        </View>
      </View>
      <View
        style={[
          styles.detailsContainer,
          { borderColor: colors.sportColors[sport] },
        ]}
      >
        <IconWithText
          iconName="account-group"
          iconSize={iconSize}
          text={`${event.curPlayersAmount}/${event.maxPlayersAmount}`}
        />
        <SportsIcon sport={sport} backgroundSize={iconSize + 20} />
        <IconWithText
          iconName="calendar"
          iconSize={iconSize}
          text={format(date, "MMM do")}
        />
      </View>
      <View style={styles.playersContainer}>
        <ScrollView horizontal contentContainerStyle={styles.scrollContainer}>
          {!loading && !error && (
            <ShowEventPlayers
              captainId={event.captain.id}
              players={data.Event.players}
            />
          )}
        </ScrollView>
      </View>
      <NavigateToEvent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  detailsContainer: {
    alignSelf: "center",
    alignItems: "center",
    borderWidth: 1.5,
    backgroundColor: colors.snow,
    borderRadius: 10,
    flexDirection: "row",
    height: 100,
    justifyContent: "space-evenly",
    shadowOpacity: 0.5,
    shadowRadius: 7,
    width: "90%",
  },
  eventName: {
    fontSize: 28,
    marginBottom: 10,
  },
  headerContainer: {
    flexDirection: "row",
    margin: 25,
    marginBottom: 35,
  },
  image: {
    marginLeft: 20,
    borderRadius: 50,
    height: 100,
    width: 100,
    marginBottom: 10,
  },
  joinBtn: {},
  playersContainer: {
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 10,
    width: "90%",
    height: 200,
    borderWidth: 1,
  },
  scrollContainer: {
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
});

export default EventPage;

/*

<View style={[styles.container]}>
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.eventName}>{event.eventName}</Text>
          <Text style={styles.evetnDetails}>{event.eventName}</Text>
        </View>
        <View style={styles.joinBtn}>
          <JoinEvent event={event} isParticipant={isParticipant} />
        </View>
      </View>
      <View
        style={[
          styles.detailsContainer,
          { borderColor: colors.sportColors[sport] },
        ]}
      >
        <IconWithText
          iconName="account-group"
          iconSize={iconSize}
          text={`${event.curPlayersAmount}/${event.maxPlayersAmount}`}
        />
        <SportsIcon sport={sport} backgroundSize={iconSize + 20} />
        <IconWithText
          iconName="calendar"
          iconSize={iconSize}
          text={format(date, "MMM do")}
        />
      </View>
      <View style={styles.playersContainer}>
        <ScrollView horizontal contentContainerStyle={styles.scrollContainer}>
          {!loading && !error && (
            <ShowEventPlayers players={data.Event.players} />
          )}
        </ScrollView>
      </View>
      <NavigateToEvent />
    </View>

*/
