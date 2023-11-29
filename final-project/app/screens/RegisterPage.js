import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { initUser } from "../redux/actions";
import colors from "../utils/colors";

import Buttons from "../components/Buttons";
import LoginField from "../components/LoginField";

export default function RegisterPage() {
  const dispatch = useDispatch();
  const nav = useNavigation();

  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const handleLogin = () => {
    if (!username || !password) {
      alert("Please fill all the fields");
      return;
    }

    dispatch(initUser(username, password));

    nav.navigate("Default");
  };

  return (
    <View style={styles.base}>
      <View style={styles.logo}>
        <Image
          source={require("../icons/Logo.png")}
          style={{ width: 82, height: 90.2, resizeMode: "contain" }}
        />
      </View>
      <View style={{ marginHorizontal: "20%", marginVertical: 50 }}>
        <LoginField
          label="Username"
          icon="person-circle-outline"
          onChangeText={setUsername}
        />
        <View style={{ height: 23 }}></View>
        <LoginField
          label="Password"
          icon="key"
          secureTextEntry
          onChangeText={setPassword}
        />
      </View>

      <Buttons
        width={"60%"}
        height={45}
        color={colors.blue}
        textSize={14}
        text="Sign Up"
        onPress={handleLogin}
      />

      <Text
        style={{
          alignSelf: "center",
          marginTop: 8,
          fontSize: 12,
          fontWeight: 300,
        }}
      >
        Already have an account?{" "}
        <Text
          style={{ color: colors.blue, fontWeight: "bold" }}
          onPress={() => nav.navigate("Login")}
        >
          Login
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: colors.white,
  },
  logo: {
    width: 127,
    height: 116.361,
    backgroundColor: colors.white,
    elevation: 5,
    borderRadius: 80,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    shadowColor: colors.black,
    marginTop: 80,
  },
  button: {
    backgroundColor: colors.blue,
    height: 45,
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 4,
  },
});
