import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import SportsIconList from "../layouts/SportsIconList";

import colors from "../../config/colors";

const FormFeedPicker = ({ name, items, showErrorMessage = false }) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  const itemSelected = (item) => {
    return values[name].indexOf(item) >= 0;
  };

  const onPress = (item) => {
    let newValues = [];
    if (values[name].indexOf(item) >= 0) {
      newValues = values[name].filter((i) => i != item);
    } else {
      newValues = [...values[name], item];
    }
    setFieldValue(name, newValues);
  };

  const isInvalid = errors[name] && touched[name];
  const invalidStyle = {
    borderBottomWidth: 1.2,
    borderColor: colors.danger,
    borderRadius: 300,
  };

  return (
    <>
      <SportsIconList
        userSports={items}
        onPress={onPress}
        itemSelected={itemSelected}
        iconSize={40}
        style={isInvalid ? invalidStyle : null}
      />
      {showErrorMessage && (
        <ErrorMessage error={errors[name]} visible={touched[name]} />
      )}
    </>
  );
};

export default FormFeedPicker;
