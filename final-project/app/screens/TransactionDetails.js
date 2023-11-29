import React, { useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import MonthYearTab from "../components/MonthYearTab";
import Transaction from "../components/Transaction";
import EmptyListMessage from "../components/EmptyListMessage";
import { resetDate } from "../redux/actions";

export default function TransactionDetails() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetDate(new Date().getMonth(), new Date().getFullYear()));
  }, []);

  const transactions = useSelector((state) => state.transactions);

  const selectedMonth = useSelector((state) => state.initialMonth);
  const selectedYear = useSelector((state) => state.initialYear);

  console.log(selectedMonth, selectedYear);

  const groupedTransactions = groupTransactionsByDate(transactions);

  const renderItem = ({ item }) => (
    <View key={item.id} style={styles.transactionContainer}>
      <Transaction {...item} />
    </View>
  );

  const filteredTransactions = groupedTransactions.filter(
    (group) =>
      new Date(group.date).getMonth() === selectedMonth &&
      new Date(group.date).getFullYear() === selectedYear
  );

  const formattedDate = (date) => {
    return new Date(date).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <View style={styles.base}>
      <View style={{ marginTop: 16 }} />
      <MonthYearTab />
      <View
        style={{
          flex: 1,
          width: "90%",
          alignSelf: "center",
        }}
      >
        {filteredTransactions.length > 0 ? (
          <View style={{ marginTop: 15 }}>
            <FlatList
              data={filteredTransactions}
              keyExtractor={(item) => item.date}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <View>
                  <Text
                    style={{ fontWeight: 400, fontSize: 16, marginBottom: 15 }}
                  >
                    {formattedDate(item.date)}
                  </Text>
                  <FlatList
                    data={item.transactions}
                    keyExtractor={(item) => item.id.toString()}
                    style={{ marginBottom: 15 }}
                    renderItem={renderItem}
                    ItemSeparatorComponent={<View style={{ height: 5 }} />}
                  />
                </View>
              )}
            />
          </View>
        ) : (
          <EmptyListMessage imgWidth={250} imgHeight={150} textSize={16} />
        )}
      </View>
    </View>
  );
}

const groupTransactionsByDate = (transactions) => {
  const groupedTransactions = transactions.reduce((acc, transaction) => {
    const date = transaction.date.split("T")[0];

    if (!acc[date]) {
      acc[date] = { date, transactions: [] };
    }

    acc[date].transactions.push(transaction);

    return acc;
  }, {});

  return Object.values(groupedTransactions);
};

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: "#F7F8F9",
  },
  transactionContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    borderColor: "#B0B0B030",
    borderWidth: 1,
    padding: 10,
  },
});
