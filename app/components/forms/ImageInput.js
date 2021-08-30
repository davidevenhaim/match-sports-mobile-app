import React, { useEffect } from "react";
import { Alert, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";
import { itemPageSpec } from "../../config/theme";
const { ICON_SIZE } = itemPageSpec;

const ImageInput = ({
  imageUri = "",
  handleChange,
  iconName = "face",
  inputStyle,
}) => {
  useEffect(() => {
    askImagePermission();
  }, []);

  const askImagePermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted)
      return Alert.alert(
        "Permission Denied",
        "To continue, you need to enable permission access to the gallery.",
        [{ text: "Ok" }, { text: "Try again", onPress: askImagePermission }]
      );
  };
  const handleImagePress = async () => {
    if (!imageUri) selectImageHandler();
    else
      Alert.alert("Delete", "Are you sure you want to delete the image?", [
        { text: "Yes", onPress: () => handleChange("") },
        { text: "No" },
      ]);
  };
  const selectImageHandler = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });

      if (!result.cancelled) {
        handleChange(result.uri);
      }
    } catch (error) {
      console.log("Error ", error);
    }
  };
  return (
    <TouchableOpacity onPress={handleImagePress}>
      <View style={[styles.container, inputStyle]}>
        {imageUri === "" && (
          <MaterialCommunityIcons
            name={iconName}
            size={ICON_SIZE * 1.2}
            color={colors.silver}
          />
        )}
        {imageUri !== "" && (
          <Image source={{ uri: imageUri }} style={styles.image} />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    alignSelf: "center",
    borderRadius: ICON_SIZE * 1.25,
    backgroundColor: colors.snow,
    height: ICON_SIZE * 2.5,
    justifyContent: "center",
    overflow: "hidden",
    width: ICON_SIZE * 2.5,
    borderWidth: 0.2,
    borderColor: colors.mediumGrey,
  },
  icon: {
    backgroundColor: colors.lightGrey,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
export default ImageInput;
