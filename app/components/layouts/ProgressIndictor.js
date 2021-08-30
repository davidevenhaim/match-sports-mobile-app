import React from "react";
import { StyleSheet, View } from "react-native";

import colors from "../../config/colors";

const ProgressIndictor = ({ amount = 3, index, size = 22, style }) => {
  const Circle = ({ backgroundColor }) => (
    <View
      style={[
        styles.circle,
        {
          backgroundColor,
          borderRadius: size / 2,
          borderWidth: size / 8,
          height: size,
          width: size,
        },
      ]}
    />
  );

  const arr = [];
  for (let i = 1; i <= amount; i++) arr[i] = i;

  return (
    <View style={[styles.progressIndicator, style]}>
      {arr.map((i) => (
        <Circle
          backgroundColor={i === index ? colors.primary : colors.white}
          key={i.toString()}
        />
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  circle: {
    borderColor: colors.primary,
    margin: 5,
  },
  progressIndicator: {
    flexDirection: "row",
    alignSelf: "center",
  },
});

export default ProgressIndictor;
