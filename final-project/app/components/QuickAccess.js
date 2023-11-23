import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export default function QuickAccess() {
  let balance = 707000;
  let formattedBalance =
    balance.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + ",00-";

  return (
    <View style={styles.greeting}>
      <Text style={[styles.greetingText, { fontSize: 13 }]}>Good Morning</Text>
      <Text style={[styles.greetingText, { fontSize: 16 }]}>John Doe</Text>
      <View style={styles.infoBox}>
        <View style={styles.walletInfo}>
          <Ionicons
            name="md-wallet"
            size={24}
            color="#FFA91A"
            style={{ marginRight: 10 }}
          />
          <Text style={{ fontSize: 15 }}>Your Balance</Text>
        </View>
        <Text style={{ fontSize: 24, left: 37, top: 24 }}>
          Rp {formattedBalance}
        </Text>
        <View style={styles.button}>
          <View>
            <TouchableOpacity style={styles.addIncome}>
              <MaterialCommunityIcons name="sack" size={43} color="#FFA91A" />
            </TouchableOpacity>
            <Text style={styles.buttonLabel}>Add Income</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.addExpense}>
              <FontAwesome name="dollar" size={43} color="#7BBB71" />
            </TouchableOpacity>
            <Text style={styles.buttonLabel}>Add Expense</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  greeting: {
    backgroundColor: "#2340DC",
    height: 124,
    top: 40,
  },
  greetingText: {
    color: "#fff",
    left: 35,
    top: 25,
  },
  infoBox: {
    backgroundColor: "#FFFFFF",
    height: 232,
    width: "85%",
    alignSelf: "center",
    borderRadius: 10,
    top: 39,
    elevation: 5,
    shadowColor: "#000000",
  },
  walletInfo: {
    flexDirection: "row",
    alignItems: "center",
    top: 15,
    left: 35,
  },
  button: {
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignItems: "center",
    top: 54,
  },
  buttonLabel: {
    fontSize: 12,
    color: "#000000",
    alignSelf: "center",
    top: 4,
  },
  addIncome: {
    backgroundColor: "#FFF4E0",
    height: 65,
    width: 117,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  addExpense: {
    backgroundColor: "#EAFFE7",
    height: 65,
    width: 117,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
