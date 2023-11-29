import React, { useRef } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import colors from "../utils/colors";
import { useFocusEffect } from "@react-navigation/native";
import { useSelector } from "react-redux";
import PieChart from "react-native-pie-chart";

import BudgetList from "../components/BudgetList";

export default function Statistics() {
  const scrollViewRef = useRef();

  const month = useSelector((state) => state.initialMonth);
  const year = useSelector((state) => state.initialYear);
  const data = useSelector((state) => state.monthlyData);

  const series = (() => {
    const monthData = data[year]?.[month];

    if (!monthData) {
      return [0, 0, 0, 0, 0, 1];
    }

    const spentValues = Object.values(monthData?.categories).map(
      (category) => category.spent
    );

    if (spentValues.every((val) => val === 0)) {
      return [...spentValues, 1]; // All spent values are 0, set the 6th element to 1
    }

    return [...spentValues, 0];
  })();

  const sliceColor = [
    colors.blue,
    colors.orange,
    colors.red,
    colors.green,
    colors.yellow,
    colors.grey,
  ];

  useFocusEffect(() => {
    scrollViewRef.current?.scrollTo({ y: 0, animated: true });
  });

  return (
    <ScrollView
      ref={scrollViewRef}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View style={styles.base}>
        <View style={{ height: 18 }} />
        <PieChart
          widthAndHeight={160}
          series={series}
          sliceColor={sliceColor}
          style={{ alignSelf: "center" }}
        />
        <View style={{ height: 13 }} />
        <BudgetList stats type="Shopping" />
        <BudgetList stats type="Food" />
        <BudgetList stats type="Education" />
        <BudgetList stats type="Household" />
        <BudgetList stats type="Social" />
        <View style={{ height: 15 }} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: "#F7F8F9",
    marginBottom: 55,
  },
  title: {
    fontSize: 24,
    margin: 10,
  },
});
