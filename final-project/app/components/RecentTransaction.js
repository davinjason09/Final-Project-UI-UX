import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export default function RecentTransaction() {
  const nav = useNavigation();

  const EmptyListMessage = () => {
    return (
      <View style={styles.emptyListStyle}>
        <Text>No Data Found</Text>
      </View>
    );
  };

  return (
    <View>
      <View style={styles.title}>
        <Text style={{ fontSize: 20, fontWeight: 500 }}>
          Recent Transactions
        </Text>
        <TouchableOpacity>
          <Text
            style={{ fontSize: 14, fontWeight: 500, color: "#2340DC" }}
            onPress={() => nav.navigate("Transaction Details")}
          >
            Show all
          </Text>
        </TouchableOpacity>
      </View>
      {/* <FlatList ListEmptyComponent={EmptyListMessage} /> */}
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
  transactions: {
    backgroundColor: "#FFFFFF",
    width: "85%",
    minHeight: 200,
    marginTop: 15,
    marginBottom: 68,
    flexDirection: "row",
    flexGrow: 1,
    alignSelf: "center",
    borderRadius: 30,
    elevation: 3,
    shadowColor: "#000000",
  },
});
