import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { registerRootComponent } from "expo";

import Navbar from "./app/components/Navbar";

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

registerRootComponent(App);
