import React from "react";
import { StyleSheet, Text, View } from "react-native";

import MonthYearTab from "../components/MonthYearTab";

export default function TransactionDetails() {
  return (
    <View style={styles.base}>
      <MonthYearTab />
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: "#F7F8F9",
  },
});
