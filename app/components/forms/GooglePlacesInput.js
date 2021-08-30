import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  GooglePlacesAutocomplete,
  RequestUrl,
} from "react-native-google-places-autocomplete";
import { useFormikContext } from "formik";

import colors from "../../config/colors";
import { itemPageSpec } from "../../config/theme";
const { MARGIN, RADIUS } = itemPageSpec;

const API_KEY = "";
const URL_REQUEST =
  "https://maps.googleapis.com/maps/api/place/findplacefromtext/output?$parameters";
const INPUT_TYPE = "textquery"; // "phonenumber" alse avilable
const LANG = "iw"; // hebrew!
const FIELDS = ""; // need to specify - public sport places or something like this

const GooglePlacesInput = ({ style, inputName, width = "80%" }) => {
  const { setFieldValue } = useFormikContext();

  const loc = {
    lat: 32.0983724,
    lng: 34.7854915,
    longName: "תל אביב",
    shortName: "ספורטק",
  };

  const change = () => {
    setFieldValue(inputName, loc);
  };

  useEffect(() => change(), []);
  return (
    <View style={style}>
      <GooglePlacesAutocomplete
        // requestUrl={EXAMPLE_1}
        placeholder="Where is your event?"
        onPress={(data, details) => {
          console.log(data);
          console.log(details);
          setFieldValue(inputName, {
            lat: details.geometry.location.lat,
            lng: details.geometry.location.lng,
            longName: details.address_components[2].long_name,
            shortName: details.address_components[2].short_name,
          });
        }}
        query={{
          // key: API_KEY,
          language: LANG,
          components: "country:il",
        }}
        currentLocation
        currentLocationLabel="מיקום נוכחי"
        textInputProps={{
          errorStyle: { color: colors.red },
        }}
        styles={{
          powered: { opacity: 0 },
          textInput: styles.textInput,
          textInputContainer: { width },
          listView: [styles.placesList, { width }],
        }}
        fetchDetails
        renderDescription={(row) => row.description}
        GooglePlacesDetailsQuery
      />
    </View>
  );
};
const styles = StyleSheet.create({
  textInput: {
    backgroundColor: colors.snow,
    borderRadius: RADIUS * 2,
    flexDirection: "row",
    marginBottom: MARGIN * 0.5,
    marginLeft: MARGIN,
    marginTop: MARGIN * 0.5,
    padding: MARGIN,
    borderColor: colors.mediumGrey,
    borderWidth: 0.1,
    fontFamily: "Righteous-font",
  },
  placesList: {
    backgroundColor: colors.snow,
    borderColor: colors.mediumGrey,
    borderWidth: 0.1,
    marginLeft: MARGIN,
    borderRadius: RADIUS * 0.4,
  },
});

export default GooglePlacesInput;

const EXAMPLE_1 = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?
  input=Museum%20of%20Contemporary%20Art%20Australia&
  inputtype=textquery&
  fields=photos,formatted_address,name,rating,opening_hours,geometry
  &key=${API_KEY}`;

const EXAMPLE_2 = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?
input=mongolian%20grill&
inputtype=textquery&
fields=photos,formatted_address,name,opening_hours,rating&
locationbias=circle:2000@47.6918452,-122.2226413&
key=YOUR_API_KEY`;
