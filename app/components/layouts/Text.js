import React from "react";
import { StyleSheet, Text } from "react-native";
import { useFonts } from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";

import defaultStyles from "../../config/styles";
import { SPACING, itemPageSpec } from "../../config/theme";
const { TEXT_SIZE } = itemPageSpec;

const AppText = ({
  children,
  size = TEXT_SIZE * 1.2,
  style,
  ...otherProps
}) => {
  let [fontsLoaded] = useFonts({
    "Righteous-font": require("../../assets/fonts/Righteous-Regular.ttf"),
  });
  if (!fontsLoaded) return <AppLoading />;

  return (
    <Text style={[styles.text, { fontSize: size }, style]} {...otherProps}>
      {children}
    </Text>
  );
};
const styles = StyleSheet.create({
  text: {
    color: defaultStyles.colors.black,
    fontFamily: "Righteous-font",
  },
});
export default AppText;
