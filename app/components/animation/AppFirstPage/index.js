import React, { useRef } from "react";
import { StatusBar } from "react-native";
import { StyleSheet, View, Dimensions, Animated } from "react-native";

import Button from "../../layouts/Button";
import ScrollViewCard from "../ScrollViewCard";

import colors from "../../../config/colors";

const BACKGROUNDS = [colors.primary, "#4279a3", "#3b5998", colors.primary];

const DATA = [
  {
    description: `Explore & Join Sport Events that match\n the best for YOU.`,
    image:
      "https://img-premium.flaticon.com/png/512/2936/premium/2936766.png?token=exp=1626937147~hmac=8345bf145b0ff25a294fb99cf398489a",
    key: "i1",
    title: "Meet New Friends",
  },
  {
    description: `Create your own custom sport events and athletes will join you.`,
    image: "https://image.flaticon.com/icons/png/512/3593/3593635.png",
    key: "i2",
    title: "Create Events",
  },
  {
    description: `You are ready to start,it's completley free.\n With friendly and easy to adapt UI`,
    image:
      "https://img-premium.flaticon.com/png/512/2436/premium/2436696.png?token=exp=1626937078~hmac=e038c90e41cbdb761bee72be79c21816",
    key: "i3",
    title: "Have Fun!",
  },
  {
    action: true,
    description: `We can help you find potnetial clients and \n schedule a training session through the app!`,
    image:
      "https://img-premium.flaticon.com/png/512/3475/premium/3475033.png?token=exp=1626937234~hmac=38f7af8092830c05a5c9f5218ffd24ee",
    key: "i4",
    title: "Are you a Coach?",
  },
];

const Indicator = ({ scrollX }) => {
  return (
    <View style={{ position: "absolute", flexDirection: "row", bottom: 50 }}>
      {DATA.map((item, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0.8, 1.8, 0.8],
          extrapolate: "clamp",
        });
        let backgroundColor = colors.white;
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.6, 1, 0.6],
          extrapolate: "clamp",
        });
        if (i == DATA.length - 1) {
          backgroundColor = colors.silver;
          // last element of the list gets a unique color.
        }
        return (
          <Animated.View
            key={item.key}
            style={{
              borderRadius: 8,
              backgroundColor,
              height: 12,
              margin: 10,
              opacity,
              transform: [
                {
                  scale,
                },
              ],
              width: 12,
            }}
          />
        );
      })}
    </View>
  );
};

const BackDrop = ({ scrollX }) => {
  const backgroundColor = scrollX.interpolate({
    inputRange: BACKGROUNDS.map((_, i) => i * width),
    outputRange: BACKGROUNDS.map((bg) => bg),
  });
  return (
    <Animated.View
      style={[StyleSheet.absoluteFillObject, { backgroundColor }]}
    />
  );
};

const Square = ({ scrollX }) => {
  const YOLO = Animated.modulo(
    Animated.divide(Animated.modulo(scrollX, width), new Animated.Value(width)),
    1
  );

  const rotate = YOLO.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ["35deg", "0deg", "35deg"],
  });

  const translateX = YOLO.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, -height, 0],
  });

  return (
    <Animated.View
      style={{
        width: height,
        height,
        backgroundColor: colors.white,
        borderRadius: 85,
        position: "absolute",
        top: -height * 0.65,
        left: -height * 0.3,
        transform: [
          {
            rotate,
          },
          {
            translateX,
          },
        ],
      }}
    />
  );
};

const { width, height } = Dimensions.get("screen");

const index = ({ beCoach, signUp, signIn }) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <BackDrop scrollX={scrollX} />
      <Square scrollX={scrollX} />
      <Animated.FlatList
        contentContainerStyle={{ paddingBottom: 120 }}
        data={DATA}
        horizontal
        keyExtractor={(item) => item.key.toString()}
        renderItem={({ item }) => (
          <ScrollViewCard
            action={item.action ? beCoach : null}
            description={item.description}
            image={item.image}
            title={item.title}
            width={width}
          />
        )}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={32}
        pagingEnabled
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
      />
      <View style={styles.btnContainer}>
        <Button
          onPress={signUp}
          text="Sign Up"
          style={styles.button}
          textStyle={{ color: colors.black }}
        />
        <Button
          onPress={signIn}
          text="Sign In"
          style={styles.button}
          textStyle={{ color: colors.black }}
        />
      </View>
      <Indicator scrollX={scrollX} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    // position: "absolute",
    bottom: 90,
  },
  button: {
    backgroundColor: colors.selected,
    width: "38%",
    margin: 15,
  },
});

export default index;
