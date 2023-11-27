import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Statistics() {
  return (
    <View style={styles.base}>
      <Text>Statistics</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: "#F7F8F9",
  },
});
