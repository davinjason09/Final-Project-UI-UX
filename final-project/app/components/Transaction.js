import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Transaction({
  type,
  amount,
  date,
  category,
  account,
  note,
}) {
  const categoryIcons = {
    Shopping: {
      icon: require("../icons/shopping.png"),
      bgColor: "#D6DCF6",
      width: 13.33,
      height: 15.05,
    },
    Food: {
      icon: require("../icons/food.png"),
      bgColor: "#FFF4E0",
      width: 16,
      height: 15,
    },
    Education: {
      icon: require("../icons/education.png"),
      bgColor: "#FDDCDC",
      width: 20,
      height: 15,
    },
    Household: {
      icon: require("../icons/household.png"),
      bgColor: "#EAFFE7",
      width: 14.44,
      height: 14.44,
    },
    Social: {
      icon: require("../icons/social.png"),
      bgColor: "#F5F6BC",
      width: 17.39,
      height: 18.26,
    },
  };

  const accountColor = {
    BCA: "#DCDCF6",
    BNI: "#FFF4E0",
    BRI: "#FDDCDC",
    BSI: "#EAFFE7",
    Mandiri: "#F5F6BC",
    Cash: "#F5F6BC",
  };

  const formattedAmount = amount
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");

  const formattedDate = new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const isIncome = type === "Income";

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <View
          style={[
            styles.circle,
            {
              backgroundColor: isIncome
                ? accountColor[account]
                : categoryIcons[category].bgColor,
            },
          ]}
        >
          {isIncome ? (
            <Text style={{ fontSize: 12, fontWeight: 700 }}>{account}</Text>
          ) : (
            categoryIcons[category] && (
              <Image
                source={categoryIcons[category].icon}
                style={{
                  width: categoryIcons[category].width,
                  height: categoryIcons[category].height,
                  resizeMode: "contain",
                }}
              />
            )
          )}
        </View>
        <View
          style={{
            flexDirection: "column",
            alignSelf: "center",
            marginLeft: 12,
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>
            {isIncome ? "Income" : category}
          </Text>
          <Text style={{ fontSize: 11.2, fontWeight: 500, color: "#969696" }}>
            {formattedDate}
          </Text>
          {note && (
            <Text style={{ fontSize: 11.2, fontWeight: 500, color: "#969696" }}>
              {note}
            </Text>
          )}
        </View>
      </View>
      <View style={{ justifyContent: "center" }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: isIncome ? "#3DA440" : "#DD2F30",
          }}
        >
          {isIncome ? "Rp " : "-Rp "}
          {formattedAmount}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#B0B0B0B2",
    borderWidth: 1.2,
  },
});
