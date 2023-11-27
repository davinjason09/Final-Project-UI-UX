import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import LoginField from "../components/LoginField";

export default function LoginPage() {
  const nav = useNavigation();

  return (
    <View style={styles.base}>
      <View style={styles.logo}>
        <Image
          source={require("../icons/Logo.png")}
          style={{ width: 82, height: 90.2, resizeMode: "contain" }}
        />
      </View>
      <View style={{ marginHorizontal: "20%", marginVertical: 50 }}>
        <LoginField label="Username" icon="person-circle-outline" />
        <View style={{ height: 23 }}></View>
        <LoginField label="Password" icon="key" secureTextEntry />
      </View>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={() => nav.navigate("Default")}
      >
        <Text style={{ color: "#FFFFFF", fontSize: 14, fontWeight: 700 }}>
          Login
        </Text>
      </TouchableOpacity>
      <View>
        <Text
          style={{
            alignSelf: "center",
            marginTop: 8,
            fontSize: 12,
            fontWeight: 300,
          }}
        >
          Don't have an account?{" "}
          <Text
            style={{ color: "#2340DC", fontWeight: "bold" }}
            onPress={() => nav.navigate("Register")}
          >
            Sign Up
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  logo: {
    width: 127,
    height: 116.361,
    backgroundColor: "#FFFFFF",
    elevation: 5,
    borderRadius: 80,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    shadowColor: "#000000",
    marginTop: 80,
  },
  button: {
    backgroundColor: "#2340DC",
    height: 45,
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 4,
  },
});
