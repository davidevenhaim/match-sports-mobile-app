import React from "react";
import { StyleSheet, View } from "react-native";

import TextInput from "./TextInput";

const TextInputFocusEffect = ({
  error,
  fieldSize = 50,
  iconName,
  iconSize = 15,
  isProtected = false,
  rightIconName,
  setIsHidden,
  style,
  touched,
  width = "90%",
  ...otherProps
}) => {
  return (
    <TextInput
      error={error}
      fieldSize={fieldSize}
      iconName={iconName}
      iconSize={iconSize}
      isProtected={isProtected}
      rightIconName={rightIconName}
      setIsHidden={setIsHidden}
      style={{}}
      touched={touched}
      width={width}
      // onFocus={() => console.log("Email")}
      {...otherProps}
    />
  );
};
const styles = StyleSheet.create({});

export default TextInputFocusEffect;
