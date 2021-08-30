import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import colors from "../../config/colors";

const EventFeed = () => {
  const [sportFilters, setSportFilters] = useState([]);
  const [textFilters, setTextFilters] = useState("");
  const headerHeight = 200;

  const isSelected = (sport) => {
    return sportFilters.indexOf(sport) >= 0;
  };

  const setSportFilter = (sport) => {
    if (isSelected(sport)) {
      const newSports = sportFilters.filter((sportArr) => sportArr !== sport);
      setSportFilters([...newSports]);
    } else {
      setSportFilters([...sportFilters, sport]);
    }
  };

  return (
    <View style={styles.container}>
      {/* <ShowEventFeed
        sportFilters={sportFilters}
        textFilters={textFilters}
        Header={FeedHeader}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerHeader: {
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    borderLeftWidth: 1,
    borderBottomWidth: 2,
    borderRightWidth: 1,
    borderRightColor: colors.secondary,
    borderBottomColor: colors.secondary,
    borderLeftColor: colors.secondary,
    overflow: "hidden",
    height: 200,
  },
});

export default EventFeed;
