import React, { useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "../utils/colors";
import { useDispatch, useSelector } from "react-redux";

import EditAmount from "./EditAmount";
import { editCategory } from "../redux/actions";

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

  const [amount, setAmount] = useState(allocated);

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
    console.log(month, year, type, amount);
    const intAmount = parseInt(amount);
    dispatch(editCategory(month, year, type, intAmount));

    onClose();
  };

  return (
    <View>
      <Pressable onPress={onPress}>
        <View style={styles.container(list)}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={[styles.circle, { backgroundColor: Icons[type].bgColor }]}
            >
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
                  <Text
                    style={{
                      fontSize: 11,
                      fontWeight: "bold",
                      color: colors.white,
                    }}
                  >
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
              <View style={styles.progressBar}>
                <View
                  style={{
                    width: spent && allocated ? 150 * (spent / allocated) : 0,
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
          )}
          {(config || stats) && (
            <Text style={{ fontSize: 16, fontWeight: 700 }}>
              Rp {format(config ? allocated : spent)}
            </Text>
          )}
        </View>
      </Pressable>

      <EditAmount isvisible={isVisible} onClose={onClose}>
        <Text style={{ fontSize: 18, fontWeight: 700 }}>{type}</Text>
        <TextInput
          placeholder="Enter Amount"
          placeholderTextColor={colors.grey2}
          style={styles.textInput}
          keyboardType="numeric"
          value={amount ? amount.toString() : ""}
          onChangeText={setAmount}
        />
        <TouchableOpacity
          onPress={handleSave}
          style={styles.saveButton}
          activeOpacity={0.5}
        >
          <Text style={{ fontSize: 14, fontWeight: 700, color: colors.white }}>
            Save
          </Text>
        </TouchableOpacity>
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
  textInput: {
    height: 52,
    width: 250,
    borderColor: colors.blue,
    borderWidth: 1,
    borderRadius: 10,
    textAlign: "center",
  },
  saveButton: {
    backgroundColor: colors.blue,
    colors: colors.white,
    width: 250,
    height: 52,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
