import React from "react";
import { StyleSheet, View, Image } from "react-native";

import Text from "../layouts/Text";
import Button from "../layouts/Button";

import colors from "../../config/colors";

const ScrollViewCard = ({ action, description, image, title, width }) => {
  return (
    <View style={[styles.container, { width }]}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: image }}
          style={{
            width: width / 2,
            height: width / 2,
            resizeMode: "contain",
          }}
        />
      </View>
      <View style={{ flex: 0.3 }}>
        <Text
          style={[
            styles.text,
            {
              fontSize: 36,
              marginBottom: 10,
            },
          ]}
        >
          {title}
        </Text>
        <Text
          style={[
            styles.text,
            {
              fontSize: 16,
            },
          ]}
        >
          {description}
        </Text>
        {action && (
          <View>
            <Button
              onPress={action}
              style={styles.button}
              text="Sign Up as Coach"
            />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    width: "60%",
    margin: 15,
    borderWidth: 1,
    borderColor: colors.selected,
  },
  container: {
    alignItems: "center",
  },
  imageContainer: {
    flex: 0.7,
    justifyContent: "center",
    padding: 20,
  },
  text: {
    color: colors.white,
    textAlign: "center",
  },
});

export default ScrollViewCard;
