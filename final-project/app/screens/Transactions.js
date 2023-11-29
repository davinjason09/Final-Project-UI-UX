import React, { useEffect, useRef } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { resetDate } from "../redux/actions";
import { useFocusEffect } from "@react-navigation/native";
import colors from "../utils/colors";

import MonthYearTab from "../components/MonthYearTab";
import TransactionDetails from "../components/TransactionDetails";
import EmptyListMessage from "../components/EmptyListMessage";

export default function Transactions() {
  const dispatch = useDispatch();
  const flatListRef = useRef();

  useEffect(() => {
    dispatch(resetDate(new Date().getMonth(), new Date().getFullYear()));
  }, []);

  useFocusEffect(() => {
    flatListRef.current?.scrollToOffset({ y: 0, animated: true });
  });

  const transactions = useSelector((state) => state.transactions);
  const selectedMonth = useSelector((state) => state.initialMonth);
  const selectedYear = useSelector((state) => state.initialYear);

  const groupedTransactions = groupTransactionsByDate(transactions);

  const renderItem = ({ item }) => (
    <View key={item.id} style={styles.transactionContainer}>
      <TransactionDetails {...item} />
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
          <View>
            <FlatList
              ref={flatListRef}
              data={filteredTransactions}
              keyExtractor={(item) => item.date}
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={
                <View style={{ height: 1, backgroundColor: colors.grey3 }} />
              }
              renderItem={({ item }) => (
                <View style={{ paddingBottom: 15 }}>
                  <Text
                    style={{
                      fontWeight: 400,
                      fontSize: 16,
                      marginVertical: 15,
                    }}
                  >
                    {formattedDate(item.date)}
                  </Text>
                  <FlatList
                    data={item.transactions}
                    keyExtractor={(item) => item.id.toString()}
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
    const date = new Date(transaction.date).toLocaleDateString("en-CA");

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
    backgroundColor: colors.white2,
  },
  transactionContainer: {
    backgroundColor: colors.white,
    borderRadius: 20,
    borderColor: colors.grey3,
    borderWidth: 1,
    padding: 10,
  },
  line: {
    height: 1,
    backgroundColor: colors.grey3,
  },
});
