import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Income = [];

const Expense = [];

const allTransactions = [...Income, ...Expense];

const sortedTransactions = allTransactions.sort((a, b) => {
  return new Date(b.date) - new Date(a.date);
});

export default function RecentTransaction() {
  const nav = useNavigation();

  const last4Transactions = sortedTransactions.slice(0, 4);

  const EmptyListMessage = () => {
    return (
      <View style={styles.emptyListStyle}>
        <Image
          source={require("../icons/notransaction.png")}
          style={{ width: 200, height: 150, resizeMode: "contain" }}
        />
        <Text style={{ fontSize: 16, fontWeight: 700 }}>
          No Transaction Found
        </Text>
      </View>
    );
  };

  const renderItem = ({ item }) => {
    return (
      <View>
        <Text>{item}</Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.title}>
        <Text style={{ fontSize: 20, fontWeight: 500 }}>
          Recent Transactions
        </Text>
        <TouchableOpacity>
          <Text
            style={{ fontSize: 14, fontWeight: 500, color: "#2340DC" }}
            onPress={() => nav.navigate("Transaction Details")}
          >
            Show All
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        {last4Transactions.length > 0 ? (
          last4Transactions.map((item) => renderItem(item))
        ) : (
          <EmptyListMessage />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginLeft: 39,
    marginRight: 42,
    marginTop: 15,
  },
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderColor: "#B0B0B04D",
    borderWidth: 1,
    marginTop: 15,
    marginBottom: 55,
  },
  emptyListStyle: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 50,
  },
});
