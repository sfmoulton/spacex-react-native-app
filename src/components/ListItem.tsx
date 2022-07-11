import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

interface Props {
  flightNumber: string;
  missionName: string;
  launchDate: string;
  rocketName: string; //need to set type here
}

const ListItem = (props: Props) => {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <Text style={styles.boldText}>#{props.flightNumber}</Text>
      <Text style={styles.boldText}>{props.missionName}</Text>
      <View>
        <Text style={styles.text}>{props.launchDate}</Text>
        <Text style={styles.boldText}>{props.rocketName}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  boldText: { fontFamily: "BrandonGrotesque-Medium", fontSize: 18 },
  text: {fontFamily: "BrandonGrotesque-Regular", fontSize: 12}
});

export default ListItem;
