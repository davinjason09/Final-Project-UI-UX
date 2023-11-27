import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function EmptyListMessage({ imgWidth, imgHeight, textSize }) {
  return (
    <View style={styles.emptyListStyle}>
      <Image
        source={require("../icons/notransaction.png")}
        style={{ width: imgWidth, height: imgHeight, resizeMode: "contain" }}
      />
      <Text style={{ fontSize: textSize, fontWeight: 700 }}>
        No Transaction Found
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  emptyListStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
