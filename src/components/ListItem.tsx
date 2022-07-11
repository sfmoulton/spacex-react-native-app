import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

interface Props {
  launchNumber: string;
  launchName: string;
  launchDate: string;
  launchDetails: string; //need to set type here
}

const ListItem = (props: Props) => {
  return (
    <View>
        <Text>#{props.launchNumber}</Text>
        <Text>This is the {props.launchName} item!</Text>
        <Text>{props.launchDate}</Text>
    </View>
  );
};
