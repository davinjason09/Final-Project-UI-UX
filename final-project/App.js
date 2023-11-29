import React from "react";
import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, View } from "react-native";
import { Provider } from "react-redux";

import store from "./app/redux/store";
import AppNavigation from "./app/components/AppNavigation";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <AppNavigation />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
});
