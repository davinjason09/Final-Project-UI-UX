import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function TransactionDetails() {
  return (
    <View style={styles.base}>
      <Text>Transaction Details</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F7F8F9",
  },
});
