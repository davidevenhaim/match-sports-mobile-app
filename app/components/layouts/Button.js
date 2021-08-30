import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Text from "./Text";

import colors from "../../config/colors";
import defaultStyles from "../../config/styles";

const AppButton = ({
  style,
  btnHeight = 50,
  onPress,
  text,
  textStyle,
  iconName,
  iconColor = colors.white,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { height: btnHeight, borderRadius: btnHeight / 2 },
        style,
      ]}
      onPress={onPress}
    >
      <Text style={[styles.text, textStyle]}>{text}</Text>
      {iconName && (
        <MaterialCommunityIcons
          name={iconName}
          size={25}
          color={iconColor}
          style={styles.iconStyle}
        />
      )}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: defaultStyles.colors.primary,
    flexDirection: "row",
    justifyContent: "center",
    width: "90%",
  },
  iconStyle: {
    position: "absolute",
    right: 10,
  },
  text: {
    color: defaultStyles.colors.white,
    textAlign: "center",
  },
});
export default AppButton;
