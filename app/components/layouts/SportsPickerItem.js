import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import Text from "./Text";
import SportsIcon from "./SportsIcon";

import colors from "../../config/colors";
import { itemPageSpec } from "../../config/theme";
const { ICON_SIZE } = itemPageSpec;

function SportsPickerItem({
  iconSize = ICON_SIZE,
  textSize = iconSize / 2.5,
  backgroundSize = iconSize * 1.45,
  item,
  isSelected,
  onPress,
  style,
}) {
  let iconStyle = null;
  let selectedTextStyle = null;

  if (isSelected) {
    iconStyle = {
      backgroundColor: colors.sportColors[item],
    };
    selectedTextStyle = { color: colors.sportColors[item] };
  }
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      {item && (
        <SportsIcon
          iconSize={iconSize}
          backgroundSize={backgroundSize}
          sport={item}
          style={[styles.icon, iconStyle]}
        />
      )}
      <Text style={[styles.text, { fontSize: textSize }, selectedTextStyle]}>
        {item}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginRight: ICON_SIZE / 20,
  },
  text: {
    color: colors.notSelected,
    textAlign: "center",
    textTransform: "capitalize",
    top: -ICON_SIZE * 0.2,
  },
  icon: {
    borderWidth: 1,
    borderColor: colors.secondary,
    backgroundColor: colors.notSelected,
  },
});

export default SportsPickerItem;
