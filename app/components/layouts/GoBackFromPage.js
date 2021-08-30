import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

import { itemPageSpec } from "../../config/theme";
const { ICON_SIZE, MARGIN } = itemPageSpec;

const GoBackFromPage = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.goBackButton}>
      <View>
        <MaterialCommunityIcons name="arrow-left" size={ICON_SIZE} />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  goBackButton: {
    position: "absolute",
    top: MARGIN * 1.5,
    left: MARGIN * 0.5,
    // zIndex: 2,
  },
});

export default GoBackFromPage;
