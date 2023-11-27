import React from "react";
import { StyleSheet, View, Modal, TouchableOpacity } from "react-native";

export default function ContentPicker({ isvisible, children, onClose }) {
  return (
    <Modal animationType="slide" transparent={true} visible={isvisible}>
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPress={onClose}
      ></TouchableOpacity>
      <View style={styles.container}>{children}</View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "#00000000",
  },
  container: {
    backgroundColor: "#FFFFFF",
    height: 290,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#B0B0B04D",
    borderWidth: 1,
    elevation: 5,
    shadowColor: "#000000",
  },
});
