import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

import { DesignColours } from "../../assets/colours/colours";

interface Props {
  flightNumber: string;
  missionName: string;
  launchDate: string;
  rocketName: string;
}

const ListItem = (props: Props) => {
  return (
    <View style={styles.view}>
      <View style={styles.infoSection1}>
        <View style={styles.flightNumber}>
          <Text style={styles.boldText}>#{props.flightNumber}</Text>
        </View>
        <Text style={styles.boldText}>{props.missionName}</Text>
      </View>
      <View style={styles.infoSection2}>
        <Text style={styles.launchDateText}>{props.launchDate}</Text>
        <Text style={styles.rocketNameText}>{props.rocketName}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 3,
    elevation: Platform.OS === "ios" ? undefined : 3,
    borderRadius: 3,
    backgroundColor: DesignColours.white,
    shadowColor: DesignColours.darkGrey,
    shadowOffset: {
      height: 2,
      width: 2,
    },
    shadowOpacity: Platform.OS === "ios" ? 0.4 : 0.8,
    shadowRadius: Platform.OS === "ios" ? undefined : 40,
  },
  infoSection1: {
    flexDirection: "row",
  },
  infoSection2: { paddingLeft: 50, alignSelf: "flex-end" },
  flightNumber: { paddingRight: 20 },
  boldText: { fontFamily: "BrandonGrotesque-Medium", fontSize: 18 },
  rocketNameText: {
    fontFamily: "BrandonGrotesque-Medium",
    fontSize: 18,
    textAlign: "right",
  },
  launchDateText: { fontFamily: "BrandonGrotesque-Regular", fontSize: 12 },
});

export default ListItem;

// TO DO
// Check styling on Android and other iOS devices
// Use responsive sizing for text, padding etc.
// Check `elevation` on Android - does it fit with the design?
