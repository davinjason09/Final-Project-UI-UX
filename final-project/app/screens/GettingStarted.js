import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import colors from "../utils/colors";

import Buttons from "../components/Buttons";

export default function GettingStarted() {
  const nav = useNavigation();

  const handlePress = () => {
    nav.navigate("Login");
  };

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
            color: colors.black + "99",
          }}
        >
          Be more organized{"\n"}in managing your money!
        </Text>
      </View>
      <Buttons
        width={"60%"}
        height={45}
        color={colors.blue}
        textSize={14}
        text="Get Started"
        onPress={handlePress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: colors.white,
  },
  logoBox: {
    width: "100%",
    height: "80%",
    backgroundColor: colors.blue,
    borderBottomLeftRadius: 150,
    borderBottomRightRadius: 150,
  },
  logo: {
    width: 191,
    height: 175,
    backgroundColor: colors.white,
    elevation: 5,
    borderRadius: 80,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    shadowColor: colors.black,
    marginTop: 240,
  },
});
