import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";

export default function AddIncome() {
  return (
    <View style={styles.base}>
      <View style={{ marginTop: 38 }}>
        <View style={styles.inputBox}>
          <Text style={{ fontSize: 15, fontWeight: 400, marginLeft: 25 }}>
            Date
          </Text>
          <TextInput
            placeholder="dd/mm/yy"
            placeholderTextColor={"#9B9B9B"}
            style={styles.textInput}
          ></TextInput>
        </View>
        <View style={styles.inputBox}>
          <Text style={{ fontSize: 15, fontWeight: 400, marginLeft: 25 }}>
            Account
          </Text>
          <TextInput
            placeholder="Choose Account"
            placeholderTextColor={"#9B9B9B"}
            style={styles.textInput}
          ></TextInput>
        </View>
        <View style={styles.inputBox}>
          <Text style={{ fontSize: 15, fontWeight: 400, marginLeft: 25 }}>
            Amount
          </Text>
          <TextInput
            placeholder="Insert Amount"
            placeholderTextColor={"#9B9B9B"}
            style={styles.textInput}
          ></TextInput>
        </View>
        <View style={styles.inputBox}>
          <Text style={{ fontSize: 15, fontWeight: 400, marginLeft: 25 }}>
            Note
          </Text>
          <TextInput
            placeholder="Add Note"
            placeholderTextColor={"#9B9B9B"}
            style={styles.textInput}
          ></TextInput>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: "#F7F8F9",
  },
  inputBox: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    borderRadius: 5,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-between",
    width: "86.4%",
    height: 56,
    elevation: 5,
    shadowColor: "#000000",
    marginBottom: 5,
  },
  textInput: {
    fontSize: 12,
    marginRight: 25,
    width: "40%",
    textAlign: "right",
  },
});
