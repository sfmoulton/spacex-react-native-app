// eslint-disable-next-line @typescript-eslint/no-unused-vars
// TO DO - Linting error, added this for timebeing
import React from "react";
import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
import { DesignColours } from "../../assets/colours/colours";

const windowDimensions = Dimensions.get("window");
const windowHeight = windowDimensions.height;
const windowWidth = windowDimensions.width;

const Header = () => {
  return (
    <View style={styles.view}>
      <Image
        style={styles.spacexLogo}
        source={require("../../assets/spacex-logo.png")}
      />
      <Text style={styles.text}>LAUNCHES</Text>
      <Image
        style={styles.rocketImage}
        source={require("../../assets/img/launch-home.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: "white",
    alignItems: "center",
  },
  spacexLogo: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.05,
  },
  text: {
    fontFamily: "BrandonGrotesque-Regular",
    fontSize: 18,
    color: DesignColours.darkGrey,
    letterSpacing: 0.75,
    paddingVertical: 10,
  },
  rocketImage: {
    width: windowWidth * 0.5,
    height: windowHeight * 0.3,
  },
});

export default Header;

// TO DO
// Use responsive sizing for fonts, and padding - so looks similar on other devices
// This has all been tested on iPhone 13 - so needs further testing on other devices
