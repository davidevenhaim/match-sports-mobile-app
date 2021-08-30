import React from "react";
import { StyleSheet, View } from "react-native";

import colors from "../../config/colors";

const Seperator = ({ style }) => {
  return <View style={[styles.container, style]} />;
};
const styles = StyleSheet.create({
  container: {
    borderBottomColor: colors.selected,
    borderBottomWidth: 1.5,
    width: "90%",
    alignSelf: "center",
  },
});

export default Seperator;
