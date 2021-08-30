import React from "react";
import { Image, StyleSheet, View } from "react-native";

import AppText from "./Text";

import defaultStyles from "../../config/styles";
import { itemPageSpec } from "../../config/theme";
const { LOGO_SIZE } = itemPageSpec;

const AppLogo = ({ logoStyle, textStyle, showText = true }) => {
  return (
    <View style={styles.container}>
      <Image
        style={[styles.logo, logoStyle]}
        source={require("../../assets/appLogo.png")}
        // height={LOGO_SIZE * 1.5}
        // width={LOGO_SIZE * 1.5}
        resizeMethod="scale"
      />
      {showText && <AppText style={[styles.text, textStyle]}>Match</AppText>}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  logo: {
    height: LOGO_SIZE,
    width: LOGO_SIZE,
    overflow: "visible",
  },
  text: {
    color: defaultStyles.colors.primary,
    fontSize: 30,
  },
});
export default AppLogo;
