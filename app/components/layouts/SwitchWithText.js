import React from "react";
import { StyleSheet, Switch, View } from "react-native";

import Text from "./Text";

import colors from "../../config/colors";

const SwitchWithText = ({
  fontSize = 18,
  onValueChange,
  text,
  value,
  ...otherProps
}) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize, color: colors.silver }}>{text}</Text>
      <Switch
        value={value}
        thumbColor={colors.white}
        onValueChange={onValueChange}
        {...otherProps}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    width: "90%",
  },
});

export default SwitchWithText;
