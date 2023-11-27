import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function GettingStarted() {
  const nav = useNavigation();

  return (
    <View style={styles.base}>
      <View style={{ height: "60%" }}>
        <View style={styles.logoBox}>
          <View style={styles.logo}>
            <Image
              source={require("../icons/Logo.png")}
              style={{ width: 130, height: 143, resizeMode: "contain" }}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          marginBottom: 37,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: 500,
            textAlign: "center",
            color: "#00000099",
          }}
        >
          Be more organized{"\n"}in managing your money!
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={() => nav.navigate("Login")}
      >
        <Text style={{ color: "#FFFFFF", fontSize: 14, fontWeight: 700 }}>
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  logoBox: {
    width: "100%",
    height: "80%",
    backgroundColor: "#2340DC",
    borderBottomLeftRadius: 150,
    borderBottomRightRadius: 150,
  },
  logo: {
    width: 191,
    height: 175,
    backgroundColor: "#FFFFFF",
    elevation: 5,
    borderRadius: 80,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    shadowColor: "#000000",
    marginTop: 240,
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
