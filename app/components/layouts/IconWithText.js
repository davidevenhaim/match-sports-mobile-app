import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Text from "./Text";
import colors from "../../config/colors";

const IconWithText = ({
  iconColor = colors.black,
  iconName,
  iconSize = 40,
  iconStyle,
  text,
  textColor = colors.black,
  textSize = iconSize / 2,
  style,
}) => {
  return (
    <View style={[{ alignItems: "center" }, style]}>
      <View style={iconStyle}>
        <MaterialCommunityIcons
          name={iconName}
          size={iconSize}
          color={iconColor}
        />
      </View>
      <Text style={{ fontSize: textSize, color: textColor }}>{text}</Text>
    </View>
  );
};

export default IconWithText;
