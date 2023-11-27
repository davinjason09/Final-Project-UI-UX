import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IconLeft, IconRight } from "../assets";
import { CardList, Gap, Header } from "../components";
import { colors } from "../utils";

const BudgetSetting = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header
        iconBack
        textCenter="Budget Setting"
        onPress={() => navigation.goBack()}
      />
      <Gap height={24} />
      <View
        style={[
          styles.flexrow,
          {
            justifyContent: "space-around",
            padding: 4,
            backgroundColor: colors.white,
          },
        ]}
      >
        <TouchableOpacity>
          <IconLeft />
        </TouchableOpacity>
        <Text style={styles.text3}>Nov 2023</Text>
        <TouchableOpacity>
          <IconRight />
        </TouchableOpacity>
      </View>
      <Gap height={24} />
      <CardList
        listbudgetsetting
        iconFood
        text="Food"
        text2="Rp 1.000.000"
        onPress={() => navigation.navigate("BudgetSettingDetail")}
      />
      <CardList
        listbudgetsetting
        iconShopping
        text="Shopping"
        text2="Rp 300.000"
      />
      <CardList
        listbudgetsetting
        iconHouseHold
        text="Household"
        text2="Rp 150.000"
      />
      <CardList
        listbudgetsetting
        iconEducation
        text="Education"
        text2="Rp 100.000"
      />
      <CardList listbudgetsetting iconSocial text="Social" text2="Rp 150.000" />
    </View>
  );
};

export default BudgetSetting;

const styles = StyleSheet.create({
  text3: {
    color: colors.black,
    fontSize: 14,
  },
  flexrow: {
    flexDirection: "row",
    alignItems: "center",
  },
});
