import React from "react";
import { StyleSheet, View } from "react-native";

import SportsIcon from "./SportsIcon";
import Text from "./Text";

const SportsIconWithText = ({
  backgroundSize = 80,
  iconSize = backgroundSize / 1.5,
  sport,
  style,
  ...otherProps
}) => {
  return (
    <View style={styles.container}>
      <SportsIcon
        backgroundSize={backgroundSize}
        iconSize={iconSize}
        sport={sport}
        style={style}
        {...otherProps}
      />
      <Text>{sport}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
  },
});

export default SportsIconWithText;
