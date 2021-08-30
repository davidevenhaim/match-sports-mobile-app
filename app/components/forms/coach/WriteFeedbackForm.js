import React from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";
import { SPACING } from "../../../config/theme";

import Form from "../Form";
import FormField from "../FormField";
import SubmitButton from "../SubmitButton";
import StarRating from "./StarRating";

const RATING_VALUE = [1, 2, 3, 4, 5];

const validationSchema = Yup.object().shape({
  rating: Yup.number().min(1).max(5).required("How good was your experience?"),
  message: Yup.string()
    .test(
      "len",
      "Message review must contain at least 2 words!",
      (val) => val && val.split(" ").length >= 2
    )
    .required(),
});

const convertValues = (values, coachId) => ({
  // reformating price per hour to the way the BACKEND supports.
  ...values,
  rating: isNaN(+values.rating) ? 1 : +values.rating,
  id: coachId,
});

const WriteFeedbackForm = ({ action, error, coachId, handler }) => {
  return (
    <Form
      initialValues={{
        rating: 5,
        message: "",
      }}
      onSubmit={(values) => {
        const convertedValues = convertValues(values, coachId);
        console.log(convertedValues);

        action({
          variables: {
            ...convertedValues,
          },
        });
        handler();
      }}
      validationSchema={validationSchema}
    >
      <View
        style={{
          flexDirection: "row",
          width: "90%",
          alignContent: "center",
          alignSelf: "center",
        }}
      >
        <View style={{ width: "70%", alignItems: "center" }}>
          <FormField
            inputName="message"
            autoCapitalize="sentences"
            multiline
            fieldSize={90}
            iconName="comment"
            placeholder="Tell us, how was your experience?"
            errorMessageStyle={{ textAlign: "center", fontSize: 12 }}
            width="100%"
          />
          <StarRating inputName="rating" ratingValues={RATING_VALUE} />
        </View>
        <View style={{ left: SPACING * 2, justifyContent: "center" }}>
          <SubmitButton
            iconName="send"
            error={error}
            errorMessageStyle={{ fontSize: 11, width: "70%" }}
          />
        </View>
      </View>
    </Form>
  );
};
const styles = StyleSheet.create({});

export default WriteFeedbackForm;
