import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function MonthYearPicker({ month, year, onPrev, onNext }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPrev}>
        <Ionicons name="chevron-back" size={20} color="black" />
      </TouchableOpacity>
      <Text
        style={{ fontSize: 14, fontWeight: "bold" }}
      >{`${month} ${year}`}</Text>
      <TouchableOpacity onPress={onNext}>
        <Ionicons name="chevron-forward" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    height: 36,
    width: "95%",
    marginTop: 16,
    paddingHorizontal: 27,
    borderRadius: 5,
    borderColor: "#B0B0B04D",
    borderWidth: 1,
  },
});
