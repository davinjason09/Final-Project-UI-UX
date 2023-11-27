import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function LoginField({ icon, label, secureTextEntry }) {
  return (
    <View>
      <Text style={{ fontSize: 13, fontWeight: 700, left: 10 }}>{label}</Text>
      <View style={styles.input}>
        <Ionicons
          name={icon}
          size={24}
          color="#2340DC"
          style={{ marginHorizontal: 10 }}
        />
        <TextInput secureTextEntry={secureTextEntry}></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    height: 52,
    borderRadius: 10,
    borderColor: "#949FE7",
    borderWidth: 2,
    alignItems: "center",
    paddingRight: 10,
    marginVertical: 8,
  },
});
