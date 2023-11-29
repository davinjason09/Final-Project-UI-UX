import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../utils/colors";

import Buttons from "../components/Buttons";

export default function ProfilePage() {
  const nav = useNavigation();

  const user = useSelector((state) => state.user);

  const handlePress = () => {
    nav.navigate("Edit Profile");
  };

  return (
    <View style={styles.base}>
      <View style={styles.rectangle}>
        <View style={styles.overlayContainer}>
          {user.image ? (
            <Image
              source={{ uri: user.image }}
              style={{ width: 90, height: 90, borderRadius: 45 }}
            />
          ) : (
            <MaterialCommunityIcons
              name="account-circle"
              size={100}
              color={colors.blue}
            />
          )}
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Text style={{ fontSize: 16, fontWeight: 500, marginBottom: 14 }}>
              {user.username}
            </Text>
            <Buttons
              text="Edit Profile"
              width={160}
              height={24}
              textSize={14}
              color={colors.blue}
              onPress={handlePress}
            />
          </View>
        </View>
      </View>

      <View style={{ marginTop: 180 }}>
        <View style={styles.infoRow}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={styles.iconBg}>
              <MaterialCommunityIcons
                name="account"
                size={24}
                color="#969696"
              />
            </View>
            <Text style={styles.infoText}>Username</Text>
          </View>
          <Text style={styles.infoValue}>{user.username}</Text>
        </View>
        <View style={styles.infoRow}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={styles.iconBg}>
              <MaterialCommunityIcons name="email" size={24} color="#969696" />
            </View>
            <Text style={styles.infoText}>Email</Text>
          </View>
          <Text style={styles.infoValue}>{user.email}</Text>
        </View>
        <View style={styles.infoRow}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={styles.iconBg}>
              <MaterialCommunityIcons
                name="gender-male-female"
                size={24}
                color="#969696"
              />
            </View>
            <Text style={styles.infoText}>Gender</Text>
          </View>
          <Text style={styles.infoValue}>{user.gender}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: colors.white,
  },
  rectangle: {
    width: "100%",
    height: 110,
    backgroundColor: "#2340DC",
  },
  overlayContainer: {
    flexDirection: "row",
    width: "90%",
    height: 180,
    backgroundColor: colors.white,
    shadowColor: colors.black,
    elevation: 8,
    borderRadius: 25,
    top: 45,
    paddingHorizontal: 15,
    justifyContent: "space-evenly",
    alignItems: "center",
    alignSelf: "center",
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    paddingHorizontal: 20,
    borderTopColor: colors.grey,
    borderBottomColor: colors.grey,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  iconBg: {
    backgroundColor: colors.grey,
    borderRadius: 23,
    width: 46,
    height: 46,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
  },
  infoText: {
    fontSize: 18,
    fontWeight: "400",
  },
  infoValue: {
    fontSize: 14,
    fontWeight: "medium",
  },
});
