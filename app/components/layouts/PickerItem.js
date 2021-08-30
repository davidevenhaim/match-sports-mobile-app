import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import defaultStyles from "../../config/styles";

import AppText from "./Text";

function PickerItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    color: defaultStyles.colors.dark,
    flexDirection: "row",
  },
});

export default PickerItem;
