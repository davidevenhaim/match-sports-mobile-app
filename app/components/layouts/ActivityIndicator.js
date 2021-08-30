import React from "react";
import { StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";

const ActivityIndicator = ({ visible = true, style }) => {
  if (!visible) return null;

  return (
    <View style={[styles.container, style]}>
      <LottieView
        autoPlay
        loop
        source={require("../../assets/animations/loading.json")}
        style={styles.lottie}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  lottie: {
    height: 250,
    width: 250,
  },
});
export default ActivityIndicator;
