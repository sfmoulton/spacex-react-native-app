import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  Button,
} from "react-native";

interface Props {
  buttonName: string;
  onPress: any; // Given more time we would add a type here
  icon: string;
  isCurved?: boolean;
  accessibilityHint: string;
}

const ListButton = (props: Props) => {
  return (
    <View style={styles.view}>
      <TouchableOpacity
        style={props.isCurved ? styles.button : styles.curvedButton}
        accessibilityRole="button"
        accessibilityHint={props.accessibilityHint}>
        <Text style={styles.text}>{props.buttonName}</Text>
        {/* <Image /> */}
        {/* need to add the relevant icon here too */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  view: { alignSelf: "flex-start", height: 50, padding: 5 },
  button: { alignItems: "center", backgroundColor: "blue", padding: 10 },
  curvedButton: {
    alignItems: "center",
    backgroundColor: "blue",
    padding: 10,
    borderBottomLeftRadius: 25,
    borderTopLeftRadius: 25,
  },
  text: { color: "white" },
  icon: {},
});

// Given more time, I would have exported out the styles

export default ListButton;

// I would also make the width/height of the buttons responsive, using the Dimensions API