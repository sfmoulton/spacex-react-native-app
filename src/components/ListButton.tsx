import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { DesignColours } from "../../assets/colours/colours";

interface Props {
  buttonName: string;
  onPress: any; // Given more time we would add a type here
  icon?: string;
  isCurved?: boolean;
  accessibilityHint: string;
}

// My plan here was to change the props - so for the different button types we only had to pass in a `buttonType` string
// Then we would have the name, icon and accessibility string for each type saved here, rather than be passed in

const ListButton = (props: Props) => {
  return (
    <View style={styles.view}>
      <TouchableOpacity
        onPress={props.onPress}
        style={props.isCurved ? styles.curvedButton : styles.button}
        accessibilityRole="button"
        accessibilityHint={props.accessibilityHint}>
        <Text style={styles.text}>{props.buttonName}</Text>
        {props.icon && <Image source={props.icon} />}
        {/* TS error - mismatched types of string and ImagePropSourceType - using a workaround for this now */}
      </TouchableOpacity>
    </View>
  );
};

// As functionality is added for the different buttons - we may need to add dropdowns/modals to allow the user to select the year OR choose whether to sort ascending/descending

const styles = StyleSheet.create({
  view: {
    alignSelf: "flex-start",
    height: 50,
    padding: 5,
  },
  button: {
    alignItems: "center",
    backgroundColor: DesignColours.midnightBlue,
    padding: 10,
    flexDirection: "row",
  },
  curvedButton: {
    alignItems: "center",
    backgroundColor: DesignColours.midnightBlue,
    padding: 10,
    borderBottomLeftRadius: 25,
    borderTopLeftRadius: 25,
    flexDirection: "row",
  },
  // Here we are reusing code - so would want to create something reusable that can extend to the two different curved/not curved types
  text: {
    color: "white",
    fontFamily: "BrandonGrotesque-Bold",
    paddingRight: 5,
  },
  icon: {},
});

export default ListButton;

// Given more time, I would have used styled-components to extract out the styles throughout
// I would also make the width/height of the buttons, the size of the icon, the font size and the padding responsive, using the Dimensions API
