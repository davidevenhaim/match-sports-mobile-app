import React from "react";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import RoundIcon from "./RoundIcon";
import Text from "./Text";

import colors from "../../config/colors";
import { itemPageSpec } from "../../config/theme";
const { MARGIN, ICON_SIZE } = itemPageSpec;

const RoundIconButtonText = ({
  backgroundSize = ICON_SIZE * 2.2,
  backgroundColor = colors.primary,
  iconColor = colors.white,
  iconName,
  iconStyle,
  onPress,
  textStyle,
  style,
  text,
  textColor = backgroundColor,
  ...otherProps
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.4}
      onPress={onPress}
      containerStyle={[styles.container, style]}
      // style={style}
    >
      <RoundIcon
        backgroundSize={backgroundSize}
        backgroundColor={backgroundColor}
        iconColor={iconColor}
        name={iconName}
        style={iconStyle}
        {...otherProps}
      />
      <Text
        style={[
          styles.text,
          { color: textColor, fontSize: backgroundSize / 3.5 },
          textStyle,
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    top: -MARGIN * 0.5,
  },
});

export default RoundIconButtonText;
