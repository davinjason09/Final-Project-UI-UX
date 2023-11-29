import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../utils/colors";

export default function Buttons({
  width,
  height,
  color,
  text,
  textSize,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={styles.saveButton(width, height, color)}
      onPress={onPress}
      activeOpacity={0.9}
    >
      <Text style={styles.text(textSize)}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  saveButton: (width, height, color) => ({
    width: width,
    height: height,
    backgroundColor: color,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  }),
  text: (textSize) => ({
    color: colors.white,
    fontSize: textSize,
    fontWeight: "bold",
  }),
});
