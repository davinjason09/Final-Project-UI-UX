import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export default function QuickAccess() {
  const nav = useNavigation();

  let balance = 707000;
  let formattedBalance = balance
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");

  return (
    <View style={{ height: 349 }}>
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
            <Text style={{ fontSize: 15, fontWeight: 500 }}>Your Balance</Text>
          </View>
          <Text style={{ fontSize: 25, fontWeight: 700, left: 37, top: 24 }}>
            Rp {formattedBalance}
          </Text>
          <View
            style={{
              borderBottomColor: "#B0B0B0B2",
              borderBottomWidth: 1.5,
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
              <Text style={[styles.buttonLabel, { fontWeight: 700 }]}>
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
              <Text style={[styles.buttonLabel, { fontWeight: 700 }]}>
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
