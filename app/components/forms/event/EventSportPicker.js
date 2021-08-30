import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "../ErrorMessage";
import SportsIconList from "../../layouts/SportsIconList";

import colors from "../../../config/colors";
import { itemPageSpec } from "../../../config/theme";
const { ICON_SIZE } = itemPageSpec;

const EventSportPicker = ({ name, showErrorMessage = false, userSports }) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const isInvalid = touched[name] && errors[name];

  const itemSelected = (sport) => {
    return sport === values[name];
  };

  const onPress = (sport) => {
    setFieldValue(name, sport);
  };

  const invalidStyle = {
    borderBottomWidth: 1,
    borderColor: colors.danger,
    borderRadius: 200,
  };

  return (
    <>
      <SportsIconList
        userSports={userSports}
        onPress={onPress}
        itemSelected={itemSelected}
        iconSize={ICON_SIZE}
        style={isInvalid ? invalidStyle : null}
      />
      {showErrorMessage && (
        <ErrorMessage visible={touched[name]} error={errors[name]} />
      )}
    </>
  );
};

export default EventSportPicker;
