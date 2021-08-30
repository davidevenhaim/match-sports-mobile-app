import React from "react";
import { Modal, StyleSheet, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import Text from "../../layouts/Text";
import Logo from "../../layouts/Logo";
import Button from "../../layouts/Button";
import Screen from "../../Screen";

import colors from "../../../config/colors";

const DatePicker = ({
  date,
  onSubmit,
  showMode,
  showPicker,
  setShowPicker,
  ...otherProps
}) => {
  const today = new Date();

  return (
    <View style={styles.modalContainer}>
      <Modal
        visible={showPicker}
        presentationStyle="overFullScreen"
        animationType="fade"
      >
        <Logo logoStyle={styles.logo} />
        <Text style={styles.modalText}>Choose {showMode} for your event:</Text>
        <View style={styles.modalDate}>
          <DateTimePicker
            testID="datePickerIos"
            display="spinner"
            value={date}
            mode={showMode}
            is24Hour
            minimumDate={today}
            onChange={(_, selectedDate) => onSubmit(selectedDate)}
            {...otherProps}
          />
        </View>
        <Button
          text="Submit"
          style={styles.btnStyles}
          onPress={setShowPicker}
        />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  btnStyles: {
    width: "50%",
    margin: 30,
  },
  container: {
    flex: 1,
  },
  pickerIcons: {
    flexDirection: "row",
    justifyContent: "center",
  },
  logo: {
    marginTop: 90,
  },
  modalContainer: {
    flex: 1,
    alignItems: "center",
  },
  modalDate: {
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.secondary,
    width: "90%",
  },
  modalText: {
    textAlign: "center",
    marginBottom: 20,
  },
});

export default DatePicker;
