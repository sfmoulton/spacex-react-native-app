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
    <View style={{ flex: 1 }}>
      <Text>#{props.flightNumber}</Text>
      <Text>This is the {props.missionName} item!</Text>
      <Text>{props.launchDate}</Text>
      <Text>{props.rocketName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ListItem;
