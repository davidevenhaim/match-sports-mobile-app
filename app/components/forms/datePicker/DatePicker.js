import React, { useState } from "react";
import { StyleSheet, View, Platform } from "react-native";
import { useFormikContext } from "formik";
import { format } from "date-fns";

import DatePickerIOS from "./DatePickerIOS";
import DatePickerAndroid from "./DatePickerAndroid";
import RoundIconButton from "../../layouts/RoundIconButton";
import Text from "../../layouts/Text";

import colors from "../../../config/colors";
import { itemPageSpec } from "../../../config/theme";
const { ICON_SIZE, MARGIN } = itemPageSpec;

const DatePicker = ({ inputName }) => {
  const { setFieldValue, errors, values, setFieldTouched, touched } =
    useFormikContext();

  const [showPicker, setShowPicker] = useState(false);
  const [showMode, setShowMode] = useState("date");
  const [isPicked, setIsPicked] = useState(false);
  const onChange = (newDate) => {
    setShowPicker(Platform.OS === "ios");
    setFieldValue(inputName, newDate);
  };

  const showDatePicker = () => {
    setShowMode("date");
    setShowPicker(true);
    setTimeout(() => setFieldTouched(inputName), 1.5 * 1000);
    setTimeout(() => setIsPicked(true), 1.5 * 1000);
  };

  const showTimePicker = () => {
    setShowMode("time");
    setShowPicker(true);
    setTimeout(() => setFieldTouched(inputName), 1.5 * 1000);
    setTimeout(() => setIsPicked(true), 1.5 * 1000);
  };

  return (
    <>
      <View style={styles.pickerIcons}>
        <RoundIconButton
          name="calendar"
          onPress={showDatePicker}
          backgroundSize={ICON_SIZE * 1.5}
          backgroundColor={errors[inputName] ? colors.danger : colors.primary}
        />
        <RoundIconButton
          name="clock"
          onPress={showTimePicker}
          backgroundSize={ICON_SIZE * 1.5}
          backgroundColor={errors[inputName] ? colors.danger : colors.primary}
        />
      </View>
      {Platform.OS === "ios" ? (
        <DatePickerIOS
          date={values[inputName]}
          onSubmit={(newDate) => onChange(newDate)}
          showMode={showMode}
          showPicker={showPicker}
          setShowPicker={() => setShowPicker(!showPicker)}
          minuteInterval={15}
        />
      ) : (
        <DatePickerAndroid
          date={values[inputName]}
          onSubmit={(newDate) => onChange(newDate)}
          showMode={showMode}
          showPicker={showPicker}
          minuteInterval={15}
        />
      )}
      {touched[inputName] && isPicked && (
        <Text style={styles.dateText}>
          {format(values[inputName], "EEEE MMMM do")} at{" "}
          {format(values[inputName], "HH:mm")}
        </Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  dateText: {
    textAlign: "center",
    color: colors.primary,
    marginBottom: MARGIN,
  },
  pickerIcons: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default DatePicker;

/*
Major differences in platforms beahviours.
*/
