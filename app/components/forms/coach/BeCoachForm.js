import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import { useSelector } from "react-redux";

import Form from "../Form";
import FormField from "../FormField";
import FormFeedPicker from "../FormFeedPicker";
import SubmitButton from "../SubmitButton";
import Text from "../../layouts/Text";

import colors from "../../../config/colors";

const validationSchema = Yup.object().shape({
  coachingSport: Yup.array().min(1, "What sports can you coach?"),
  description: Yup.string()
    .test(
      "len",
      "Description must contain at least 5 words!",
      (val) => val && val.split(" ").length >= 5
    )
    .required(),
  price: Yup.number().min(0).max(1000).required(),
});

const convertValues = (values) => ({
  // reformating price per hour to the way the BACKEND supports.
  ...values,
  price: isNaN(+values.price) ? 0 : +values.price,
});

const BeCoachForm = ({ action, error }) => {
  const curAthlete = useSelector((state) => state.userInfo);

  return (
    <Form
      initialValues={{
        coachingSport: [],
        description: "",
        price: 1,
      }}
      onSubmit={(values) => {
        const convertedValues = convertValues(values);

        action({
          variables: {
            ...convertedValues,
          },
        });
      }}
      validationSchema={validationSchema}
    >
      <Text style={styles.coachText}>What will you be coaching?</Text>
      <FormFeedPicker items={curAthlete.favoriteSport} name="coachingSport" />
      <FormField
        inputName="description"
        showErrorMessage
        autoCapitalize="sentences"
        multiline
        fieldSize={150}
        iconName="quote-right"
        placeholder={`Introduce your self to your future clients. \n Don't forget to mention: \n- Experience \n- How will you be paid? \n- Meetup place`}
        errorMessageStyle={{ textAlign: "center", fontSize: 12 }}
      />
      <FormField
        iconName="shekel-sign"
        iconSize={15}
        inputName="price"
        placeholder="Price per Hour"
        autoCorrect={false}
        keyboardType="numeric"
        width="50%"
        maxLength={3}
        type="number"
      />
      <SubmitButton error={error} text="Complete" style={{ width: "50%" }} />
    </Form>
  );
};
const styles = StyleSheet.create({
  coachText: {
    marginLeft: 15,
    marginTop: 15,
    color: colors.mediumGrey,
    textShadowColor: colors.primary,
  },
});

export default BeCoachForm;
