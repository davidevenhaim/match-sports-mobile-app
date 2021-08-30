import React from "react";

import RoundIcon from "./RoundIcon";

import defaultStyles from "../../config/styles";

const SportsIcon = ({
  backgroundSize = 80,
  iconSize = backgroundSize / 1.5,
  sport,
  style,
  ...otherProps
}) => {
  return (
    <RoundIcon
      name={defaultStyles.sportsIcons[sport]}
      style={[
        {
          backgroundColor: defaultStyles.colors.sportColors[sport],
          height: backgroundSize,
          width: backgroundSize,
        },
        style,
      ]}
      size={iconSize}
      {...otherProps}
    />
  );
};

export default SportsIcon;
