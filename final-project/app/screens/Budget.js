import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../utils";
import { useSelector } from "react-redux";

import BudgetList from "../components/BudgetList";
import { ScrollView } from "react-native-gesture-handler";

export default function Budget() {
  const nav = useNavigation();

  const balance = useSelector((state) => state.balance);

  const format = (value) => {
    return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  };

  return (
    <ScrollView
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
              Rp {format(balance)}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.settings}
            onPress={() => nav.navigate("Budget Settings")}
          >
            <Text style={{ fontSize: 14, fontWeight: 600 }}>
              Budget Settings {">"}
            </Text>
          </TouchableOpacity>
        </View>

        <BudgetList type="User" allocated={balance} spent={500000} />
        <View style={{ height: 15 }} />
        <BudgetList type="Shopping" allocated={0} spent={0} />
        <BudgetList type="Food" allocated={0} spent={0} />
        <BudgetList type="Education" allocated={0} spent={0} />
        <BudgetList type="Household" allocated={0} spent={0} />
        <BudgetList type="Social" allocated={0} spent={0} />
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
