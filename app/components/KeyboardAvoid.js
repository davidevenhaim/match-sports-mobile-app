import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";

const KeyboardAvoid = ({ style, children }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled={false}
      style={style}
    >
      {children}
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoid;
