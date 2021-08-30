import React from "react";
import { useFormikContext } from "formik";

import ImageInput from "./ImageInput";

const ImagePicker = ({ name, iconName }) => {
  const { handleChange, setFieldTouched, values } = useFormikContext();

  return (
    <ImageInput
      imageUri={values[name]}
      handleChange={handleChange(name)}
      onBlur={() => setFieldTouched(name)}
      iconName={iconName}
    />
  );
};

export default ImagePicker;
