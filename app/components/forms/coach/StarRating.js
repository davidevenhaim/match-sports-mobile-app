import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFormikContext } from "formik";

import ErrorMessage from "../ErrorMessage";

import colors from "../../../config/colors";

const StarRating = ({
  inputName,
  ratingValues,
  showErrorMessage = false,
  size = 18,
}) => {
  const { errors, touched, setFieldValue, values } = useFormikContext();

  return (
    <View style={styles.container}>
      {ratingValues.map((rate) => {
        return (
          <MaterialCommunityIcons
            name="star"
            color={
              errors[inputName]
                ? colors.red
                : rate <= values[inputName]
                ? colors.primary
                : colors.silver
            }
            size={size}
            onPress={() => setFieldValue(inputName, rate)}
          />
        );
      })}
      {/* {showErrorMessage && (
        <ErrorMessage error={errors[inputName]} visible={touched[inputName]} />
      )} */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default StarRating;
