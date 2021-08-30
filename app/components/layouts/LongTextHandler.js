import React, { useCallback, useState } from "react";
import { StyleSheet, View } from "react-native";

import Text from "./Text";

import colors from "../../config/colors";
import { itemPageSpec } from "../../config/theme";
const { TEXT_SIZE, MARGIN } = itemPageSpec;

const LongTextHandler = ({
  text,
  containerWidth = "90%",
  numOfLines = 2,
  scrollHandler,
  // a function that will be called when show more text is called -
  // will enable scroll on current page
}) => {
  const [linesNumber, setLinesNumber] = useState(numOfLines);
  const [isMoreText, setIsMoreText] = useState(false);
  const [textShown, setTextShown] = useState(false);

  if (!text) {
    text = `We are going to play at the indicated time, we are very friendly and experienced. We want to get better every time and we need new challenges, and if we meet new friends in the way, it will be great :)`;
  }

  const onTextLayout = useCallback((e) => {
    setIsMoreText(e.nativeEvent.lines.length >= numOfLines);
  });

  const toggleLineNumber = () => {
    setLinesNumber((prevState) =>
      prevState === numOfLines ? undefined : numOfLines
    );
    setTextShown((prevState) => !prevState);
    if (scrollHandler) scrollHandler((prevState) => !prevState);
  };
  return (
    <View style={[styles.container, { width: containerWidth }]}>
      <Text
        style={styles.text}
        numberOfLines={linesNumber}
        onTextLayout={onTextLayout}
        selectable
        onPress={toggleLineNumber}
      >
        {text}
      </Text>
      {isMoreText && (
        <Text
          style={{ color: colors.primary, fontSize: TEXT_SIZE * 0.9 }}
          onPress={toggleLineNumber}
        >
          Tap to see {textShown ? "less" : "more"}
        </Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: MARGIN * 0.5,
    marginBottom: MARGIN * 0.5,
  },
  text: {
    textAlign: "center",
    fontSize: TEXT_SIZE * 1.15,
  },
});

export default LongTextHandler;
