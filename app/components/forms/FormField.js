import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import TextInput from "./TextInput";
import TextInputFocusEffect from "./TextInputFocusEffect";

const AppFormField = ({
  autoFocus = false,
  iconName,
  iconColor,
  inputName,
  isProtected,
  setIsHidden,
  errorMessageStyle,
  showErrorMessage = false,
  ...otherProps
}) => {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  const onBlur = () => setFieldTouched(inputName);

  return (
    <>
      {autoFocus ? (
        <TextInputFocusEffect
          iconName={iconName}
          iconColor={iconColor}
          onBlur={onBlur}
          onChangeText={handleChange(inputName)}
          isProtected={isProtected}
          setIsHidden={setIsHidden}
          touched={touched[inputName]}
          error={errors[inputName]}
          {...otherProps}
        />
      ) : (
        <TextInput
          iconName={iconName}
          iconColor={iconColor}
          onBlur={onBlur}
          onChangeText={handleChange(inputName)}
          isProtected={isProtected}
          setIsHidden={setIsHidden}
          touched={touched[inputName]}
          error={errors[inputName]}
          {...otherProps}
        />
      )}
      {showErrorMessage && (
        <ErrorMessage
          visible={touched[inputName]}
          error={errors[inputName]}
          style={errorMessageStyle}
        />
      )}
    </>
  );
};

export default AppFormField;
