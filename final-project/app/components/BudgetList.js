import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../utils";

export default function CardList({ type, allocated, spent }) {
  const Icons = {
    User: {
      icon: require("../icons/user.png"),
      bgColor: "#00000000",
      width: 39.43,
      height: 45.06,
      barColor: colors.blue,
    },
    Shopping: {
      icon: require("../icons/shopping.png"),
      bgColor: colors.blue2,
      width: 15,
      height: 17,
      barColor: colors.blue,
    },
    Food: {
      icon: require("../icons/food.png"),
      bgColor: colors.orange2,
      width: 24.35,
      height: 22.83,
      barColor: colors.orange,
    },
    Education: {
      icon: require("../icons/education.png"),
      bgColor: colors.red2,
      width: 30.44,
      height: 22.83,
      barColor: colors.red,
    },
    Household: {
      icon: require("../icons/household.png"),
      bgColor: colors.green2,
      width: 25.28,
      height: 25.28,
      barColor: colors.green,
    },
    Social: {
      icon: require("../icons/social.png"),
      bgColor: colors.yellow2,
      width: 30.44,
      height: 22.83,
      barColor: colors.yellow,
    },
  };

  const format = (value) => {
    return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <View style={[styles.circle, { backgroundColor: Icons[type].bgColor }]}>
          {Icons[type].icon && (
            <Image
              source={Icons[type].icon}
              style={{
                width: Icons[type].width,
                height: Icons[type].height,
                resizeMode: "contain",
              }}
            />
          )}
        </View>
        <View style={{ alignSelf: "center", marginLeft: 15 }}>
          <Text style={{ fontSize: 14, fontWeight: 500 }}>
            {type === "User" ? "Monthly" : type}
          </Text>
          <Text style={{ fontSize: 12, fontWeight: 700 }}>
            Rp {format(allocated)}
          </Text>
        </View>
      </View>
      <View>
        <View style={styles.progressBar}>
          <View
            style={{
              width: allocated / spent ? 150 * (spent / allocated) : 0,
              height: 15,
              borderRadius: 5,
              backgroundColor: Icons[type].barColor,
            }}
          />
        </View>
        <View style={styles.information}>
          <Text style={{ fontSize: 12, fontWeight: 500 }}>
            Rp {format(spent)}
          </Text>
          <Text style={{ fontSize: 12, fontWeight: 500 }}>
            Rp {format(allocated)}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "95%",
    height: 70,
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: colors.white,
    paddingHorizontal: 15,
    paddingVertical: 4,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.grey,
    marginBottom: 5,
  },
  circle: {
    width: 46,
    height: 46,
    borderRadius: 23,
    alignItems: "center",
    justifyContent: "center",
  },
  progressBar: {
    width: 150,
    height: 15,
    borderRadius: 5,
    backgroundColor: colors.grey,
  },
  information: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
