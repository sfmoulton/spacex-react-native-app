import React, { useState, useEffect } from "react";
import { Text, FlatList } from "react-native";

import { getAllSpaceXLaunches } from "../api/space-x-api";
import { SingleLaunchData } from "../api/types";

import ListButton from "../components/ListButton";

const LaunchListScreen = () => {
  const [launches, setLaunches] = useState<[SingleLaunchData] | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [pageNumber, setPageNumber] = useState<number>(0);

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

  // try to transform the data to just show the fields we want?

  return (
    // <ListButton
    //   buttonName="hello"
    //   accessibilityHint="this is hint"
    //   onPress={() => console.log("hello")}
    //   icon="icon"
    // />
    <ListItem />
  );
};

export default LaunchListScreen;
