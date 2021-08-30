import React from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

const DatePickerAndroid = ({ date, onSubmit, showMode, showPicker }) => {
  const today = new Date();

  return (
    <>
      {showPicker && (
        <DateTimePicker
          testID="dateAndroid"
          display="spinner"
          value={date}
          mode={showMode}
          is24Hour
          minimumDate={today}
          onChange={(_, selectedDate) => onSubmit(selectedDate)}
          {...otherProps}
        />
      )}
    </>
  );
};

export default DatePickerAndroid;
