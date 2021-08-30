import React, { useState } from "react";
import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../../config/styles";

import PickerItem from "./PickerItem";
import Screen from "../Screen";
import Text from "./Text";

const Picker = ({
  iconName,
  items,
  onSelectItem,
  numColumns = 1,
  placeholder,
  PickerItemComponent = PickerItem,
  ListFooterComponentStyle,
  selectedItem,
}) => {
  const [modalVisible, setmodalVisible] = useState(false);

  const modalHandler = () => {
    setmodalVisible(!modalVisible);
  };

  const pickerArr = [];
  const onPressedPicker = (item) => {
    const itemIndex = pickerArr.indexOf(item);

    if (itemIndex >= 0) {
      pickerArr.splice(itemIndex, 1);
    } else {
      pickerArr.push(item);
    }

    console.log(pickerArr);
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={modalHandler}>
        <View style={styles.container}>
          <MaterialCommunityIcons
            name={iconName}
            size={20}
            style={styles.icon}
          />
          {selectedItem ? (
            <Text style={styles.text}> {selectedItem.label} </Text>
          ) : (
            <Text style={styles.placeholder}> {placeholder} </Text>
          )}
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            style={styles.icon}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button onPress={modalHandler} title="Close" />
          <FlatList
            data={items}
            horizontal={false}
            numColumns={numColumns}
            ListFooterComponentStyle={ListFooterComponentStyle}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => {
              return (
                <PickerItemComponent
                  item={item}
                  onPress={() => {
                    onSelectItem(item);
                    console.log("[picker.js] selected item", item);
                    onPressedPicker(item.label);
                  }}
                />
              );
            }}
          />
        </Screen>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.lightGrey,
    borderRadius: 25,
    flexDirection: "row",
    marginLeft: 20,
    marginVertical: 10,
    padding: 15,
    width: "90%",
  },
  icon: {
    marginRight: 12,
  },
  placeholder: {
    flex: 1,
    color: defaultStyles.colors.mediumGrey,
  },
  text: {
    flex: 1,
    color: defaultStyles.colors.dark,
  },
});
export default Picker;
