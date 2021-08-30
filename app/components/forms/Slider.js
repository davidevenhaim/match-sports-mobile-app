import React from "react";
import { StyleSheet, View } from "react-native";
import Slider from "@react-native-community/slider";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import Text from "../layouts/Text";

import colors from "../../config/colors";

const STEP = 1;

const AppSlider = ({
  inputName,
  maximumValue,
  showErrorMessage = false,
  sliderStyle,
  stepDetails,
  width,
}) => {
  const { setFieldValue, values, errors, touched } = useFormikContext();
  const isInvalid = errors[inputName] && touched[inputName];

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.text,
          { color: isInvalid ? colors.danger : colors.dark },
        ]}
      >
        {values[inputName] || "Choose event level"}
      </Text>
      <Slider
        maximumValue={maximumValue}
        maximumTrackTintColor={colors.selected}
        thumbTintColor={isInvalid ? colors.lightRed : colors.white}
        onValueChange={(value) => setFieldValue(inputName, stepDetails[value])}
        minimumTrackTintColor={colors.primary}
        step={STEP}
        style={[sliderStyle, { width: width }]}
        value={stepDetails.indexOf(values[inputName])}
      />
      {showErrorMessage && (
        <ErrorMessage error={errors[inputName]} visible={touched[inputName]} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  text: {
    textTransform: "capitalize",
  },
});

export default AppSlider;
