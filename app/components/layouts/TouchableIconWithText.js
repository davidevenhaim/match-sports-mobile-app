import React from "react";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../../config/colors";

import IconWithText from "./IconWithText";

const TouchableIconWithText = ({
  iconColor = colors.black,
  iconName,
  iconSize = 40,
  onPress,
  text,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.4} onPress={onPress}>
      <IconWithText
        iconColor={iconColor}
        iconName={iconName}
        iconSize={iconSize}
        text={text}
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({});

export default TouchableIconWithText;
