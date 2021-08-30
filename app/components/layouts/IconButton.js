import React from "react";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";
import { itemPageSpec } from "../../config/theme";
const { ICON_SIZE } = itemPageSpec;
const IconButton = ({
  name,
  size = ICON_SIZE * 1.2,
  onPress,
  iconColor = colors.primary,
  style,
}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.6} style={style}>
      <MaterialCommunityIcons name={name} size={size} color={iconColor} />
    </TouchableOpacity>
  );
};

export default IconButton;
