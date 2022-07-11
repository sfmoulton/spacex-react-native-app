import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  FlatList,
  Dimensions,
} from "react-native";

import { getAllSpaceXLaunches } from "../api/space-x-api";
import { SingleLaunchData } from "../api/types";

import ListButton from "../components/ListButton";
import ListItem from "../components/ListItem";

const LaunchListScreen = () => {
  const [launches, setLaunches] = useState<[SingleLaunchData] | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [pageNumber, setPageNumber] = useState<number>(0);

  const windowDimensions = Dimensions.get("window");
  const windowHeight = windowDimensions.height;
  const windowWidth = windowDimensions.width;

  useEffect(() => {
    const fetchLaunches = async () => {
      const result = await getAllSpaceXLaunches({ offset: pageNumber });
      setLaunches(result.data);
      // do we want to map the results and only show a set number?
    };
    try {
      fetchLaunches();
    } catch (error) {
      setError(true);
    }
  }, []);

  const renderListItem = (launchDetails: SingleLaunchData) => {
    const dateOptions = { day: "numeric", month: "long", year: "numeric" };

    // The use of toLocaleDateString was a quick solution to format the data - with time I would have found a package/created a util function to format the date to match the design

    return (
      <ListItem
        flightNumber={launchDetails.flight_number.toString()}
        missionName={launchDetails.mission_name}
        launchDate={new Date(launchDetails.launch_date_utc).toLocaleDateString(
          "en-UK",
          dateOptions, // Type error here will need to be solved - need to look at method
        )}
        rocketName={launchDetails.rocket.rocket_name}
      />
    );
  };

  // try to transform the data to just show the fields we want?

  return (
    <SafeAreaView>
      <View style={{alignSelf: "flex-end"}}>
        <ListButton
          buttonName="Reload Data"
          onPress={() => console.log("hello")}
          icon="icon"
          accessibilityHint="Reload the data"
          isCurved
        />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <ListButton
          buttonName="Filter By Year"
          onPress={() => console.log("Year")}
          accessibilityHint="Filter the list by launch year"
        />
        <ListButton
          buttonName="Sort Descending"
          onPress={() => console.log("Sort")}
          accessibilityHint="Sort the list in descending order"
        />
      </View>
      <ScrollView
        contentContainerStyle={{
          //flex: 1,
          alignItems: "center",
          //width: windowWidth * 0.8,
          //height: windowHeight * 0.7,
        }}>
        <FlatList
          data={launches}
          keyExtractor={item => item.mission_name}
          renderItem={({ item }) => renderListItem(item)}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default LaunchListScreen;
