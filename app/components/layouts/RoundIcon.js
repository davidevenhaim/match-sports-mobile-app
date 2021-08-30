import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";
import { itemPageSpec } from "../../config/theme";
const { ICON_SIZE } = itemPageSpec;

const Icon = ({
  backgroundSize = 80,
  backgroundColor = colors.primary,
  iconColor = colors.white,
  name,
  size = backgroundSize / 1.5,
  style,
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          height: backgroundSize,
          width: backgroundSize,
          backgroundColor,
        },
        style,
      ]}
    >
      <MaterialCommunityIcons name={name} size={size} color={iconColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    // backgroundColor: colors.primary,
    borderRadius: 40,
    height: 80,
    justifyContent: "center",
    margin: 10,
    width: 80,
  },
});

export default Icon;
