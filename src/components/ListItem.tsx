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
    <View
      style={{
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
        },
        shadowOpacity: Platform.OS === "ios" ? 0.4 : 0.8,
        shadowRadius: Platform.OS === "ios" ? undefined : 40,
      }}>
      {/* I was unable to check the styling here on Android - TO DO */}
      <View style={{ flexDirection: "row" }}>
        <View style={{ paddingRight: 20 }}>
          <Text style={styles.boldText}>#{props.flightNumber}</Text>
        </View>
        <Text style={styles.boldText}>{props.missionName}</Text>
      </View>
      <View style={{ paddingLeft: 50, alignSelf: "flex-end" }}>
        <Text style={styles.text}>{props.launchDate}</Text>
        <Text style={styles.rocketNameText}>{props.rocketName}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  boldText: { fontFamily: "BrandonGrotesque-Medium", fontSize: 18 },
  rocketNameText: {
    fontFamily: "BrandonGrotesque-Medium",
    fontSize: 18,
    textAlign: "right",
  },
  text: { fontFamily: "BrandonGrotesque-Regular", fontSize: 12 },
});

export default ListItem;
