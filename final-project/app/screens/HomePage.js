import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import QuickAccess from "../components/QuickAccess";
import RecentTransaction from "../components/RecentTransaction";

export default function HomePage() {
  return (
    <View style={styles.base}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <QuickAccess />
        <RecentTransaction />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: "#F7F8F9",
  },
});
