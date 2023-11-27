import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

export default function QuickAccess() {
  const nav = useNavigation();

  const balance = useSelector((state) => state.balance);

  const formattedBalance = balance
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");

  return (
    <View style={{ height: 318 }}>
      <View style={styles.greeting}>
        <Text style={[styles.greetingText, { fontSize: 13, fontWeight: 400 }]}>
          Good Morning
        </Text>
        <Text style={[styles.greetingText, { fontSize: 16, fontWeight: 800 }]}>
          John Doe
        </Text>
        <View style={styles.infoBox}>
          <View style={styles.walletInfo}>
            <Ionicons
              name="md-wallet"
              size={24}
              color="#FFA91A"
              style={{ marginRight: 10 }}
            />
            <Text style={{ fontSize: 15, fontWeight: 500 }}>Total Balance</Text>
          </View>
          <Text style={{ fontSize: 25, fontWeight: 700, left: 37, top: 24 }}>
            Rp {formattedBalance}
          </Text>
          <View
            style={{
              borderBottomColor: "#B0B0B0B2",
              borderBottomWidth: 1.2,
              width: "90%",
              alignSelf: "center",
              top: 42,
            }}
          />
          <View style={styles.button}>
            <View>
              <TouchableOpacity
                style={[styles.addButton, { backgroundColor: "#FFF4E0" }]}
                onPress={() => nav.navigate("Add Income")}
                activeOpacity={0.5}
              >
                <Image
                  source={require("../icons/income.png")}
                  style={{
                    width: 43,
                    height: 43,
                    resizeMode: "contain",
                  }}
                />
              </TouchableOpacity>
              <Text style={[styles.buttonLabel, { fontWeight: "bold" }]}>
                Add Income
              </Text>
            </View>
            <View>
              <TouchableOpacity
                style={[styles.addButton, { backgroundColor: "#EAFFE7" }]}
                onPress={() => nav.navigate("Add Expense")}
                activeOpacity={0.5}
              >
                <Image
                  source={require("../icons/expense.png")}
                  style={{
                    width: 64,
                    height: 43,
                    resizeMode: "contain",
                  }}
                />
              </TouchableOpacity>
              <Text style={[styles.buttonLabel, { fontWeight: "bold" }]}>
                Add Expense
              </Text>
            </View>
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
  },
  greetingText: {
    color: "#fff",
    left: 35,
    top: 25,
  },
  infoBox: {
    backgroundColor: "#FFFFFF",
    height: 222,
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
    top: 61,
  },
  buttonLabel: {
    fontSize: 12,
    color: "#000000",
    alignSelf: "center",
    top: 4,
  },
  addButton: {
    height: 65,
    width: 117,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
