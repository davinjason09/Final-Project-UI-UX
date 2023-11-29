import React, { useRef } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { colors } from "../utils";
import { useFocusEffect } from "@react-navigation/native";
import { useSelector } from "react-redux";
import PieChart from "react-native-pie-chart";

import BudgetList from "../components/BudgetList";

export default function Statistics() {
  const scrollViewRef = useRef();

  const selectedMonth = useSelector((state) => state.initialMonth);
  const selectedYear = useSelector((state) => state.initialYear);

  const series = [0, 0, 0, 0, 0, 1];
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
        <BudgetList stats type="Shopping" allocated={50000} spent={25000} />
        <BudgetList stats type="Food" allocated={0} spent={0} />
        <BudgetList stats type="Education" allocated={0} spent={0} />
        <BudgetList stats type="Household" allocated={0} spent={0} />
        <BudgetList stats type="Social" allocated={0} spent={0} />
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
