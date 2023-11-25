import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";

import store from "./app/redux/store";
import Navbar from "./app/components/Navbar";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Navbar />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
