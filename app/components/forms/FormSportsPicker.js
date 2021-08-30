import React from "react";
import { View } from "react-native";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import SportsPicker from "./SportsPicker";

import colors from "../../config/colors";

const AppFormPicker = ({
  name,
  items,
  numColumns,
  PickerItemComponent,
  showErrorMessage = false,
}) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  let sports = [...values[name]];

  const handleAdd = (item) => {
    setFieldValue(name, [...sports, item]);
  };

  const handleRemove = (item) => {
    sports = sports.filter((curItem) => {
      return curItem !== item;
    });
    setFieldValue(name, [...sports]);
  };

  return (
    <View>
      <SportsPicker
        name={name}
        items={items}
        onSelectItem={handleAdd}
        numColumns={numColumns}
        PickerItemComponent={PickerItemComponent}
        onRemoveItem={handleRemove}
        errorBtnColor={
          errors[name] && touched[name] ? colors.danger : colors.primary
        }
      />
      {showErrorMessage && (
        <ErrorMessage error={errors[name]} visible={touched[name]} />
      )}
    </View>
  );
};

export default AppFormPicker;
