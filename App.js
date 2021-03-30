import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { Provider as ReduxProvider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import store from "./src/redux/store";
import { Colors } from "./src/theme/colors";
import SearchStack from "./src/navigation/SearchStack";

const App = () => (
  <NavigationContainer>
    <ReduxProvider store={store}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.blue[800]} />
      <SafeAreaView style={styles.container}>
        <SearchStack />
      </SafeAreaView>
    </ReduxProvider>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
