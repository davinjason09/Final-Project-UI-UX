import React from "react";
import { StyleSheet, View } from "react-native";
import Modal from "react-native-modal";

export default function EditAmount({ isvisible, children, onClose }) {
  return (
    <Modal
      animationIn="slideInUp"
      animationOut="slideOutDown"
      animationOutTiming={500}
      transparent={true}
      isVisible={isvisible}
      onBackdropPress={onClose}
      style={styles.modal}
      backdropColor="#00000044"
      backdropTransitionOutTiming={0}
    >
      <View style={styles.container}>{children}</View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    margin: 0,
  },
  container: {
    backgroundColor: "#FFFFFF",
    height: 200,
    width: "86.7%",
    borderRadius: 20,
    justifyContent: "space-evenly",
    alignSelf: "center",
    alignItems: "center",
    borderColor: "#B0B0B04D",
    borderWidth: 1,
    elevation: 5,
    shadowColor: "#000000",
  },
});
