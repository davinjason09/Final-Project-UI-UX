import React from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function InputField({
  label,
  placeholder,
  value,
  onPress,
  keyboardType,
  editable,
  maxLength,
  onChangeText,
  required,
  testID,
}) {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.inputBox}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 15, fontWeight: 400, marginLeft: 25 }}>
            {label}
          </Text>
          {required && (
            <Text style={{ fontSize: 10, color: "#FF0000", marginLeft: 2 }}>
              *
            </Text>
          )}
        </View>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={"#9B9B9B"}
          style={styles.textInput}
          keyboardType={keyboardType}
          editable={editable}
          value={value}
          maxLength={maxLength}
          onChangeText={onChangeText}
          testID={testID}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
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
    color: "#000000",
  },
});
