import React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar } from "react-native-elements";

import colors from "../../config/colors";

const AthleteAvatar = ({
  athleteImage,
  athleteName,
  size = "medium",
  style,
}) => {
  const avatarTitle = athleteName[0].toUpperCase();

  return (
    <Avatar
      rounded
      source={athleteImage ? { uri: athleteImage } : null}
      title={avatarTitle}
      size={size}
      containerStyle={[styles.avatarStyle, style]}
    />
  );
};

const styles = StyleSheet.create({
  avatarStyle: {
    backgroundColor: colors.silver,
    borderWidth: 0.5,
    borderColor: colors.lightGrey,
  },
});

export default AthleteAvatar;
