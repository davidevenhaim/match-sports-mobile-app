import React from "react";
import { StyleSheet } from "react-native";
import { useFormikContext } from "formik";

import Button from "../layouts/Button";
import ErrorMessage from "./ErrorMessage";

import colors from "../../config/colors";
import IconButton from "../layouts/IconButton";

const SubmitButton = ({ error, errorMessageStyle, text, iconName, style }) => {
  const { handleSubmit } = useFormikContext();
  return (
    <>
      {iconName ? (
        <IconButton
          name={iconName}
          onPress={handleSubmit}
          style={[styles.submit, style]}
          size={40}
        />
      ) : (
        <Button
          text={text}
          onPress={handleSubmit}
          style={[
            styles.submit,
            error
              ? error.visible
                ? { backgroundColor: colors.danger }
                : null
              : null,
            style,
          ]}
        />
      )}
      {error && (
        <ErrorMessage
          error={error.message}
          visible={error.visible}
          style={[{ alignSelf: "center", marginTop: 5 }, errorMessageStyle]}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  submit: {
    marginTop: 25,
  },
});

export default SubmitButton;
