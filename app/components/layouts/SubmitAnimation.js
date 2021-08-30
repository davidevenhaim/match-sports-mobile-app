import React from "react";
import { StyleSheet, View } from "react-native";

import ErrorMessage from "../forms/ErrorMessage";
import ActivityIndicator from "./ActivityIndicator";

const SubmitAnimation = ({ children, error, loading }) => {
  return (
    <View>
      {loading && <ActivityIndicator style={styles.loadingIndicator} />}
      <View opacity={loading ? 0.5 : 1}>{children}</View>
      <ErrorMessage
        error={error.message}
        visible={error.visible}
        style={styles.errorMessage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingIndicator: {
    position: "absolute",
    alignSelf: "center",
  },
  errorMessage: {
    marginTop: 10,
    textAlign: "center",
  },
});

export default SubmitAnimation;
