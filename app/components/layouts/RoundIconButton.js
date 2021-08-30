import React from "react";
import { TouchableOpacity } from "react-native";

import RoundIcon from "./RoundIcon";

const TouchableIcon = ({
  backgroundSize,
  onPress,
  name,
  style,
  ...otherProps
}) => {
  return (
    <TouchableOpacity activeOpacity={0.4} onPress={onPress}>
      <RoundIcon
        style={style}
        name={name}
        backgroundSize={backgroundSize}
        {...otherProps}
      />
    </TouchableOpacity>
  );
};

export default TouchableIcon;
