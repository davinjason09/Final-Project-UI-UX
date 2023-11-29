import React, { useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import colors from "../utils/colors";
import { useDispatch, useSelector } from "react-redux";
import { editCategory } from "../redux/actions";
import * as Progress from "react-native-progress";

import EditAmount from "./EditAmount";
import Buttons from "./Buttons";

export default function BudgetList({
  type,
  onPress,
  onClose,
  isVisible,
  list,
  config,
  stats,
}) {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.monthlyData);
  const month = useSelector((state) => state.initialMonth);
  const year = useSelector((state) => state.initialYear);

  const allocated =
    data && data[year] && data[year][month]
      ? type === "User"
        ? data[year][month].balance
        : data[year][month].categories[type].allocated
      : 0;
  const spent =
    data && data[year] && data[year][month]
      ? type === "User"
        ? data[year][month].spent
        : data[year][month].categories[type].spent
      : 0;

  const totalSpent =
    data && data[year] && data[year][month] ? data[year][month].spent : 0;

  const percentageSpent =
    spent && allocated ? +((spent / allocated) * 100).toFixed(2) : 0;

  const [amount, setAmount] = useState(allocated);

  const Icons = {
    User: {
      icon: require("../icons/user.png"),
      bgColor: "transparent",
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
      width: 16,
      height: 15,
      barColor: colors.orange,
    },
    Education: {
      icon: require("../icons/education.png"),
      bgColor: colors.red2,
      width: 20,
      height: 15,
      barColor: colors.red,
    },
    Household: {
      icon: require("../icons/household.png"),
      bgColor: colors.green2,
      width: 16.61,
      height: 16.61,
      barColor: colors.green,
    },
    Social: {
      icon: require("../icons/social.png"),
      bgColor: colors.yellow2,
      width: 16.67,
      height: 15.75,
      barColor: colors.yellow,
    },
  };

  const format = (value) => {
    return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  };

  const handleSave = () => {
    const intAmount = parseInt(amount);
    dispatch(editCategory(month, year, type, intAmount));

    onClose();
  };

  return (
    <View>
      <Pressable onPress={onPress}>
        <View style={styles.container(list)}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={styles.circle(Icons[type].bgColor, 46)}>
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
            {list && (
              <View style={{ alignSelf: "center", marginLeft: 15 }}>
                <Text style={{ fontSize: 14, fontWeight: 500 }}>
                  {type === "User" ? "Monthly" : type}
                </Text>
                <Text style={{ fontSize: 12, fontWeight: 700 }}>
                  Rp {format(allocated)}
                </Text>
              </View>
            )}
            {config && (
              <Text style={{ fontSize: 16, fontWeight: 700, marginLeft: 24 }}>
                {type}
              </Text>
            )}
            {stats && (
              <View style={{ alignSelf: "center", marginLeft: 15 }}>
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>{type}</Text>
                <View
                  style={{
                    backgroundColor: Icons[type].barColor,
                    borderRadius: 5,
                    justifyContent: "center",
                    alignItems: "center",
                    width: 36,
                    height: 18,
                  }}
                >
                  <Text style={styles.text(11, "bold", colors.white)}>
                    {spent && totalSpent
                      ? +((spent / totalSpent) * 100).toFixed(2)
                      : 0}
                    %
                  </Text>
                </View>
              </View>
            )}
          </View>
          {list && (
            <View>
              <Progress.Bar
                progress={spent && allocated ? spent / allocated : 0}
                width={150}
                height={15}
                borderColor="transparent"
                borderRadius={5}
                color={Icons[type].barColor}
                unfilledColor={colors.grey}
              />
              <View style={styles.information}>
                <Text style={styles.text(12, "500", colors.black)}>
                  Rp {format(spent)}
                </Text>
                <Text style={styles.text(12, "500", colors.black)}>
                  {percentageSpent}%
                </Text>
              </View>
            </View>
          )}
          {(config || stats) && (
            <Text style={styles.text(16, "700", colors.black)}>
              Rp {format(config ? allocated : spent)}
            </Text>
          )}
        </View>
      </Pressable>

      <EditAmount isvisible={isVisible} onClose={onClose}>
        <Text style={styles.text(18, "700", colors.black)}>{type}</Text>
        <TextInput
          placeholder="Enter Amount"
          placeholderTextColor={colors.grey2}
          style={styles.textInput}
          keyboardType="numeric"
          value={amount ? amount.toString() : ""}
          onChangeText={setAmount}
        />
        <Buttons
          width={250}
          height={52}
          color={colors.blue}
          text="Save"
          textSize={14}
          onPress={handleSave}
        />
      </EditAmount>
    </View>
  );
}

const styles = StyleSheet.create({
  container: (list) => ({
    flexDirection: "row",
    justifyContent: "space-between",
    width: "95%",
    height: list ? 70 : 60,
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: colors.white,
    paddingHorizontal: 15,
    paddingVertical: 4,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.grey,
    marginBottom: 5,
  }),
  circle: (bgColor, size) => ({
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor: bgColor,
    alignItems: "center",
    justifyContent: "center",
  }),
  text: (size, weight, color) => ({
    fontSize: size,
    fontWeight: weight,
    color: color,
  }),
  information: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  textInput: {
    height: 52,
    width: 250,
    borderColor: colors.blue,
    borderWidth: 1,
    borderRadius: 10,
    textAlign: "center",
  },
});
