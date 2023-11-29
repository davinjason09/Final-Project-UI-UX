import React, { useRef } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import colors from "../utils/colors";
import { useDispatch, useSelector } from "react-redux";

import BudgetList from "../components/BudgetList";
import { resetDate } from "../redux/actions";

export default function Budget() {
  const nav = useNavigation();
  const dispatch = useDispatch();
  const scrollViewRef = useRef();

  const month = useSelector((state) => state.initialMonth);
  const year = useSelector((state) => state.initialYear);
  const data = useSelector((state) => state.monthlyData);

  const format = (value) => {
    return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  };

  useFocusEffect(() => {
    scrollViewRef.current?.scrollTo({ y: 0, animated: true });
    dispatch(resetDate(new Date().getMonth(), new Date().getFullYear()));
  });

  const monthlyBalance =
    data && data[year] && data[year][month]
      ? data[year][month].balance - data[year][month].spent
      : 0;

  return (
    <View>
      <ScrollView
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View style={styles.base}>
          <View style={{ height: 24 }} />
          <View style={styles.balance}>
            <View>
              <Text style={{ fontSize: 14, fontWeight: 500 }}>
                Remaining (Monthly)
              </Text>
              <Text style={{ fontSize: 24, fontWeight: 700 }}>
                {monthlyBalance >= 0 ? "Rp" : "-Rp"}{" "}
                {format(Math.abs(monthlyBalance))}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.settings}
              activeOpacity={0.9}
              onPress={() => nav.navigate("Budget Settings")}
            >
              <Text style={{ fontSize: 14, fontWeight: 600 }}>
                Budget Settings {">"}
              </Text>
            </TouchableOpacity>
          </View>

          <BudgetList list type="User" />
          <View style={{ height: 15 }} />
          <BudgetList list type="Shopping" />
          <BudgetList list type="Food" />
          <BudgetList list type="Education" />
          <BudgetList list type="Household" />
          <BudgetList list type="Social" />
          <View style={{ height: 15 }} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: "#F7F8F9",
    marginBottom: 55,
  },
  balance: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 22,
    marginBottom: 24,
  },
  settings: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.grey,
  },
});
