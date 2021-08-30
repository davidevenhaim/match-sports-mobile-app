import React from "react";
import { useFormikContext } from "formik";

import AppPicker from "../Picker";
import ErrorMessage from "./ErrorMessage";

const AppFormPicker = ({
  iconName,
  inputName,
  items,
  ListFooterComponentStyle,
  numColumns,
  placeholder,
  PickerItemComponent,
  ...otherProps
}) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        iconName={iconName}
        items={items}
        numColumns={numColumns}
        onSelectItem={(item) => setFieldValue(inputName, item)}
        placeholder={placeholder}
        PickerItemComponent={PickerItemComponent}
        ListFooterComponentStyle={ListFooterComponentStyle}
        selectedItem={values[inputName]}
        {...otherProps}
      />
      <ErrorMessage error={errors[inputName]} visible={touched[inputName]} />
    </>
  );
};

export default AppFormPicker;
