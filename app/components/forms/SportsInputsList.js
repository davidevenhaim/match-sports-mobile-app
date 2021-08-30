import React from "react";
import { ScrollView } from "react-native";

import SportsPickerItem from "../SportsPickerItem";

const SportsInputsList = ({ sports = [], onAddSport, onRemoveSport }) => {
  const scrollView = useRef();
  return (
    <ScrollView
      horizontal
      ref={scrollView}
      onContentSizeChange={() => scrollView.current.scrollToEnd()}
    >
      <View>
        {sports.map((sport) => {
          console.log("[SportsInputsList.js] ", sport);
          return (
            <View>
              <SportsPickerItem item={sport} onPress={onRemoveSport} />
            </View>
          );
        })}
        {/* <View><SportsPickerItem onPress={onAddSport} /></View> */}
      </View>
    </ScrollView>
  );
};

export default SportsInputsList;
