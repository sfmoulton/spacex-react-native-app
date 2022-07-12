import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { DesignColours } from "../../assets/colours/colours";

interface Props {
  buttonName: string;
  onPress: any; // Given more time we would add a type here
  icon: string;
  isCurved?: boolean;
  accessibilityHint: string;
}

// My plan here was to change the props - so for the different button types we only had to pass in a `buttonType` string
// Then we would have the name, icon and accessibility string for each type saved here, rather than be passed in

const ListButton = (props: Props) => {
  return (
    <View style={styles.view}>
      <TouchableOpacity
        style={props.isCurved ? styles.curvedButton : styles.button}
        accessibilityRole="button"
        accessibilityHint={props.accessibilityHint}>
        <Text style={styles.text}>{props.buttonName}</Text>
        {/* Need to add in icon here */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  view: { alignSelf: "flex-start", height: 50, padding: 5 },
  button: {
    alignItems: "center",
    backgroundColor: DesignColours.midnightBlue,
    padding: 10,
  },
  curvedButton: {
    alignItems: "center",
    backgroundColor: DesignColours.midnightBlue,
    padding: 10,
    borderBottomLeftRadius: 25,
    borderTopLeftRadius: 25,
  },
  text: { color: "white", fontFamily: "BrandonGrotesque-Bold" },
  icon: {},
});

export default ListButton;

// Given more time, I would have used styled-components to extract out the styles throughout
// I would also make the width/height of the buttons responsive, using the Dimensions API
