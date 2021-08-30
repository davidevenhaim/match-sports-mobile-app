import React from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { useFonts } from "@expo-google-fonts/inter";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";

import AppLoading from "expo-app-loading";

import colors from "../../config/colors";
import { itemPageSpec } from "../../config/theme";
const { ICON_SIZE, TEXT_SIZE, MARGIN, RADIUS } = itemPageSpec;

const AppTextInput = ({
  error,
  fieldSize = TEXT_SIZE * 4,
  iconName,
  iconSize = ICON_SIZE * 0.45,
  isProtected = false,
  rightIconName,
  setIsHidden,
  style,
  applyStyle = true,
  touched,
  width = "90%",
  ...otherProps
}) => {
  let [fontsLoaded] = useFonts({
    "Righteous-font": require("../../assets/fonts/Righteous-Regular.ttf"),
  });
  if (!fontsLoaded) return <AppLoading />;

  return (
    <View
      style={[
        applyStyle ? styles.frame : null,
        { width, height: fieldSize },
        touched
          ? {
              borderWidth: 1,
            }
          : null,
        error && touched
          ? {
              borderColor: colors.danger,
            }
          : null,
      ]}
    >
      {iconName && (
        <FontAwesome5
          name={iconName}
          color={error && touched ? colors.danger : colors.mediumGrey}
          style={styles.leftIcon}
          size={iconSize}
        />
      )}
      <TextInput
        placeholderTextColor={colors.mediumGrey}
        style={[styles.textInput, style]}
        {...otherProps}
        // clearButtonMode="while-editing"
      />
      {isProtected && (
        <TouchableOpacity style={styles.rightIconArea} onPress={setIsHidden}>
          <FontAwesome5
            name={rightIconName}
            size={iconSize}
            color={colors.mediumGrey}
            style={styles.rightIcon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  frame: {
    backgroundColor: colors.snow,
    borderRadius: RADIUS * 2,
    flexDirection: "row",
    // height: TEXT_SIZE,
    marginBottom: MARGIN * 0.5,
    marginLeft: MARGIN,
    marginTop: MARGIN * 0.5,
    padding: MARGIN,
    borderColor: colors.mediumGrey,
    borderWidth: 0.1,
  },
  leftIcon: {
    marginRight: MARGIN,
    alignContent: "center",
  },
  placeholder: {
    color: colors.mediumGrey,
  },
  rightIconArea: {
    height: ICON_SIZE,
    width: ICON_SIZE,
  },
  rightIcon: {
    marginLeft: MARGIN * 0.5,
  },
  textInput: {
    flex: 1,
    fontFamily: "Righteous-font",
  },
});

export default AppTextInput;
