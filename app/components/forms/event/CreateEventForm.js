import React from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";

import DatePicker from "../datePicker/DatePicker";
import Form from "../Form";
import FormField from "../FormField";
import SubmitButton from "../SubmitButton";
import Slider from "../Slider";
import EventSportPicker from "./EventSportPicker";

import events from "../../../config/events";
import { itemPageSpec } from "../../../config/theme";
import GooglePlacesInput from "../GooglePlacesInput";
const { MARGIN } = itemPageSpec;

const today = new Date();

const validationSchema = Yup.object().shape({
  avatar: Yup.mixed().label("Event picture"),
  // description: Yup.string().label("Event description"),
  eventDate: Yup.date().min(today).required().label("Event date"),
  level: Yup.string()
    .required()
    .oneOf(events.EVENT_LEVELS)
    .label("Athletes level"),
  location: Yup.object()
    .required()
    .label("Location")
    .test(
      "Location must be entered with google Maps API",
      "Location",
      (loc) => !isNaN(loc.lat) && !isNaN(loc.lng)
    ), // Waze/Maps to:
  maxPlayersAmount: Yup.number()
    .required()
    .min(2)
    .max(35)
    .label("Players amount"),
  sport: Yup.string()
    .required()
    .oneOf(events.SPORTS_CATERGORIES)
    .label("Event Sport"),
});

const convertValues = (values) => ({
  // reformating eventDate & playersAmount to the way the BACKEND supports.
  ...values,
  maxPlayersAmount: isNaN(+values.maxPlayersAmount)
    ? 0
    : +values.maxPlayersAmount,
  eventDate: JSON.parse(JSON.stringify(values.eventDate)),
});

const CreateEventForm = ({ action }) => (
  <View style={styles.container}>
    <Form
      initialValues={{
        avatar: "",
        eventDate: today,
        maxPlayersAmount: 1,
        level: "",
        location: { lat: 0, lng: 0 },
        sport: "",
      }}
      onSubmit={(values) => {
        const convertedValues = convertValues(values);
        console.log(convertedValues);
        action({
          variables: {
            ...convertedValues,
          },
        });
      }}
      validationSchema={validationSchema}
    >
      {/* <ImagePicker name="avatar" iconName="account-group-outline" /> 
                  For now, we won't support images on events.
                  Feature - Tested & Ready to work.
      */}
      <EventSportPicker userSports={events.SPORTS_CATERGORIES} name="sport" />
      <DatePicker inputName="eventDate" />
      <Slider
        inputName="level"
        maximumValue={events.EVENT_LEVELS.length - 1} // ( -1 ) because .length starts from 1, slider starts from 0
        stepDetails={events.EVENT_LEVELS}
        width="80%"
      />
      <FormField
        iconName="users"
        inputName="maxPlayersAmount"
        placeholder="Players amount"
        autoCorrect={false}
        keyboardType="numeric"
        width="50%"
        maxLength={2}
        type="number"
        showErrorMessage={true}
        errorMessageStyle={{ left: 30 }}
      />
      <GooglePlacesInput
        style={styles.googlePlaces}
        iconName="map-marker"
        inputName="location"
      />
      <SubmitButton text="Create Event" style={{ marginBottom: 40 }} />
    </Form>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: MARGIN,
    padding: 5,
  },
  googlePlaces: {
    height: itemPageSpec.ITEM_WIDTH * 0.65,
  },
});

export default CreateEventForm;

/* <FormField
        iconName="map-marker-alt"
        inputName="location"
        placeholder="Location"
        textContentType="addressCity"
        autoCorrect={false}
        width="50%"
      /> */
