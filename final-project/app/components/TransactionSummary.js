import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../utils/colors";

export default function TransactionSummary({
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
      bgColor: colors.blue2,
      width: 13.33,
      height: 15.05,
    },
    Food: {
      icon: require("../icons/food.png"),
      bgColor: colors.orange2,
      width: 16,
      height: 15,
    },
    Education: {
      icon: require("../icons/education.png"),
      bgColor: colors.red2,
      width: 20,
      height: 15,
    },
    Household: {
      icon: require("../icons/household.png"),
      bgColor: colors.green2,
      width: 14.44,
      height: 14.44,
    },
    Social: {
      icon: require("../icons/social.png"),
      bgColor: colors.yellow2,
      width: 17.39,
      height: 18.26,
    },
  };

  const accountColor = {
    BCA: colors.blue2,
    BNI: colors.orange2,
    BRI: colors.red2,
    BSI: colors.green2,
    Mandiri: colors.yellow2,
    Cash: colors.yellow2,
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
          style={styles.circle(
            isIncome ? accountColor[account] : categoryIcons[category].bgColor,
            50
          )}
        >
          {isIncome ? (
            <Text style={styles.text(12, "700", colors.black)}>{account}</Text>
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
          <Text style={styles.text(15, "bold", colors.black)}>
            {isIncome ? "Income" : category}
          </Text>
          <Text style={styles.text(11.2, "500", colors.grey4)}>
            {formattedDate}
          </Text>
          {note && (
            <Text style={styles.text(11.2, "500", colors.grey4)}>
              {note.length > 20 ? `${note.substring(0, 20)}...` : note}
            </Text>
          )}
        </View>
      </View>
      <View style={{ justifyContent: "center" }}>
        <Text
          style={styles.text(
            18,
            "bold",
            isIncome ? colors.green3 : colors.red3
          )}
        >
          {isIncome ? "Rp " : "-Rp "} {formattedAmount}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  circle: (color, size) => ({
    width: size,
    height: size,
    backgroundColor: color,
    borderRadius: size / 2,
    alignItems: "center",
    justifyContent: "center",
    borderColor: colors.grey3,
    borderWidth: 1.2,
    marginRight: 12,
  }),
  text: (size, weight, color) => ({
    fontSize: size,
    fontWeight: weight,
    color: color,
  }),
});
