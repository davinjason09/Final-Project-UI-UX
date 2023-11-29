import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../utils/colors";

export default function LoginField({
  icon,
  label,
  secureTextEntry,
  onChangeText,
}) {
  return (
    <View>
      <Text style={{ fontSize: 13, fontWeight: 700, left: 10 }}>{label}</Text>
      <View style={styles.input}>
        <Ionicons
          name={icon}
          size={24}
          color={colors.blue}
          style={{ marginHorizontal: 10 }}
        />
        <TextInput
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
          style={{ height: 52, flex: 1 }}
        ></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    flexDirection: "row",
    backgroundColor: colors.white,
    height: 52,
    borderRadius: 10,
    borderColor: colors.blue3,
    borderWidth: 2,
    alignItems: "center",
    paddingRight: 10,
    marginVertical: 8,
  },
});
