import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";

import LaunchListScreen from "./src/screens/LaunchListScreen";
import Header from "./src/components/Header";

const App = () => {
  // This is where we would add in our navigation - as we need a single screen I chose not to focus on this

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {/* We are seeing a virtualised list warning, as we are using a ScrollView and FlatList together with the same orientation */}
        {/* Next step is to look at solutions to this, as on some devices the whole screen will not be visible - */}
        {/* So we want the user to be able to scroll both the list and the screen itself */}
        <Header />
        <View>
          <LaunchListScreen />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
