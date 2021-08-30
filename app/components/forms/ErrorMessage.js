import React from "react";
import { StyleSheet } from "react-native";

import Text from "../layouts/Text";

import colors from "../../config/colors";

const ErrorMessage = ({ error, style, visible }) => {
  if (!visible || !error) {
    return null;
  }
  return <Text style={[styles.message, style]}>{error}</Text>;
};

const styles = StyleSheet.create({
  message: {
    color: colors.danger,
    fontSize: 14,
  },
});

export default ErrorMessage;
