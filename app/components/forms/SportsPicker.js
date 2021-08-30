import React, { useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  View,
  Modal,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFormikContext } from "formik";

import Button from "../layouts/Button";
import Screen from "../Screen";
import SportsPickerItem from "../layouts/SportsPickerItem";

import colors from "../../config/colors";
import { itemPageSpec } from "../../config/theme";
const { ICON_SIZE, MARGIN } = itemPageSpec;

const SportsPicker = ({
  errorBtnColor = colors.primary,
  items,
  ListFooterComponentStyle,
  name,
  numColumns = 1,
  onSelectItem,
  onRemoveItem,
}) => {
  const [modalVisible, setmodalVisible] = useState(false);

  const { values } = useFormikContext();

  const modalHandler = () => {
    setmodalVisible(!modalVisible);
  };

  const itemSelected = (item) => {
    for (let i of values[name]) {
      if (item === i) return true;
    }
    return false;
  };
  return (
    <>
      <View>
        <ScrollView horizontal keyboardDismissMode="on-drag">
          <TouchableOpacity onPress={modalHandler}>
            <View
              style={[styles.selectSport, { backgroundColor: errorBtnColor }]}
            >
              <MaterialCommunityIcons
                name="plus"
                size={ICON_SIZE}
                color="white"
              />
            </View>
          </TouchableOpacity>
          {values[name] &&
            values[name].map((item) => {
              return (
                <SportsPickerItem
                  item={item}
                  onPress={() => onRemoveItem(item)}
                  key={item}
                  style={styles.userSports}
                  isSelected
                  iconSize={ICON_SIZE}
                />
              );
            })}
        </ScrollView>
      </View>
      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setmodalVisible(false)}
      >
        <Screen>
          <MaterialCommunityIcons
            name="arrow-down-bold-circle-outline"
            color={colors.primary}
            size={40}
            style={{ alignSelf: "center" }}
            onPress={modalHandler}
          />
          <FlatList
            data={items}
            horizontal={false}
            numColumns={numColumns}
            ListFooterComponentStyle={ListFooterComponentStyle}
            keyExtractor={(item) => item.toString()}
            renderItem={({ item }) => {
              const isSelected = itemSelected(item);
              return (
                <SportsPickerItem
                  style={styles.menuSports}
                  item={item} // name of sport
                  isSelected={isSelected}
                  iconSize={ICON_SIZE * 1.5}
                  onPress={() => {
                    if (isSelected) {
                      onRemoveItem(item);
                    } else {
                      onSelectItem(item);
                    }
                  }}
                />
              );
            }}
            ListFooterComponent={
              <Button
                text="submit"
                onPress={modalHandler}
                style={styles.menuBtn}
              />
            }
          />
        </Screen>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flexWrap: "wrap",
    width: "100%",
  },
  menuSports: {
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 15,
    width: "33%",
  },
  menuBtn: {
    marginTop: MARGIN,
    width: "50%",
  },
  selectSport: {
    alignItems: "center",
    borderRadius: ICON_SIZE / 2,
    height: ICON_SIZE * 2,
    justifyContent: "center",
    marginBottom: MARGIN / 2,
    marginLeft: MARGIN / 2,
    marginRight: MARGIN / 2,
    marginTop: MARGIN / 4,
    width: ICON_SIZE * 2,
  },
  userSports: {
    marginBottom: MARGIN / 2,
  },
});

export default SportsPicker;
