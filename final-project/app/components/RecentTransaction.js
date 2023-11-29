import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

import EmptyListMessage from "./EmptyListMessage";
import TransactionSummary from "./TransactionSummary";

export default function RecentTransaction() {
  const nav = useNavigation();

  const transactions = useSelector((state) => state.transactions);
  const sortedTransactions = transactions.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  const last4Transactions = sortedTransactions.slice(0, 4);

  const renderItem = ({ item, index }) => {
    return (
      <View key={item.id}>
        <TransactionSummary {...item} />
        {index < last4Transactions.length - 1 && <Separator />}
      </View>
    );
  };

  const Separator = () => (
    <View
      style={{
        height: 1,
        backgroundColor: "#B0B0B03E",
      }}
    />
  );

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.title}>
        <Text style={{ fontSize: 20, fontWeight: 500 }}>
          Recent Transactions
        </Text>
        <TouchableOpacity>
          <Text
            style={{ fontSize: 14, fontWeight: 500, color: "#2340DC" }}
            onPress={() => nav.navigate("Transactions")}
          >
            Show All
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        {last4Transactions.length > 0 ? (
          <View
            style={{ marginTop: 35, marginBottom: 20, paddingHorizontal: 32 }}
          >
            {last4Transactions.map((item, index) =>
              renderItem({ item, index })
            )}
          </View>
        ) : (
          <EmptyListMessage imgWidth={200} imgHeight={120} textSize={16} />
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
  },
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    borderColor: "#B0B0B04D",
    borderWidth: 0.7,
    marginTop: 15,
    marginBottom: 55,
  },
  emptyListStyle: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});
