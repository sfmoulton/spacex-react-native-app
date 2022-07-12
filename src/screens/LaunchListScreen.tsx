import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  Dimensions,
  Text,
  StyleSheet,
} from "react-native";

import { getAllSpaceXLaunches } from "../api/space-x-api";
import { SingleLaunchData } from "../api/types";

import ListButton from "../components/ListButton";
import ListItem from "../components/ListItem";

const windowDimensions = Dimensions.get("window");
const windowHeight = windowDimensions.height;
const windowWidth = windowDimensions.width;

const LaunchListScreen = () => {
  const [launches, setLaunches] = useState<[SingleLaunchData] | []>([]);
  // At the moment I have chosen to store the launches in the local state
  // As the app grows in size, with navigation and multiple screens - this would be moved to be stored in redux
  // So that the data can be used throughout the app, without having to make multiple API calls
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [pageNumber, setPageNumber] = useState<number>(0);

  useEffect(() => {
    const fetchLaunches = async () => {
      const result = await getAllSpaceXLaunches({ offset: pageNumber });
      setLaunches(result.data);
      // Do we want to map the results and only show a set number?
    };
    try {
      setIsLoading(true);
      fetchLaunches();
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
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

  // Could transform the data to only save the fields that we want to locally - as with SingleLaunchData there is a lot of info that is not needed

  return (
    <SafeAreaView style={styles.safeAreaView}>
      {isLoading ? (
        <View style={styles.warningView}>
          <Text style={styles.warningText}>...Loading</Text>
        </View>
      ) : error ? (
        <View style={styles.warningView}>
          <Text style={styles.warningText}>
            Sorry, there has been an error returning the data. Please try again
            later.
          </Text>
        </View>
      ) : (
        <View>
          <View style={styles.reloadDataView}>
            <ListButton
              buttonName="Reload Data"
              onPress={() => console.log("hello")}
              icon={require("../../assets/icon/refresh.png")}
              // Temporary work around - errors when passing in just the string and using `require` in the button - needs further investigation
              accessibilityHint="Reload the data"
              isCurved
            />
          </View>
          <View style={styles.buttonsView}>
            <ListButton
              buttonName="Filter By Year"
              onPress={() => console.log("Year")}
              icon={require("../../assets/icon/select.png")}
              accessibilityHint="Filter the list by launch year"
            />
            <ListButton
              buttonName="Sort Descending"
              onPress={() => console.log("Sort")}
              icon={require("../../assets/icon/sort.png")}
              accessibilityHint="Sort the list in descending order"
            />
          </View>
          <FlatList
            data={launches}
            keyExtractor={item => item.mission_name}
            renderItem={({ item }) => renderListItem(item)}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    height: windowHeight * 0.6,
    alignItems: "center",
  },
  warningView: { width: windowWidth * 0.8 },
  warningText: {
    fontFamily: "BrandonGrotesque-Bold",
    textAlign: "center",
    fontSize: 18,
  },
  reloadDataView: { alignSelf: "flex-end" },
  buttonsView: { flexDirection: "row", justifyContent: "center" },
});

export default LaunchListScreen;

// TO DO -
// Add pagination and `Load More` options - which will make loading a lot quicker for the user
