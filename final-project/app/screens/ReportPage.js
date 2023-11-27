import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { IconLeft, IconRight } from "../assets";
import { CardList, Gap, Header } from "../components";
import { colors, fonts } from "../utils";
import PieChart from "react-native-pie-chart";

const ReportPage = ({ navigation }) => {
  const [activeBudget, setactiveBudget] = useState(true);
  const [activeStatistik, setactiveStatistik] = useState(false);
  const widthAndHeight = 250;
  const series = [200, 321, 123, 789, 537];
  const sliceColor = [
    colors.blue,
    colors.green,
    colors.red,
    colors.orange,
    colors.red3,
  ];

  const changeButton = () => {
    setactiveBudget(!activeBudget);
    setactiveStatistik(!activeStatistik);
  };

  return (
    <View style={styles.container}>
      <Header iconCalendar textCenter="Report" />
      <Gap height={24} />
      <View style={[styles.flexrow, { alignSelf: "center" }]}>
        <TouchableOpacity
          style={activeBudget ? styles.btnActive : styles.btnInActive}
          onPress={changeButton}
        >
          <Text style={activeBudget ? styles.text : styles.text2}>Budget</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={activeStatistik ? styles.btnActive : styles.btnInActive}
          onPress={changeButton}
        >
          <Text style={activeStatistik ? styles.text : styles.text2}>
            Statistik
          </Text>
        </TouchableOpacity>
      </View>
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
        <Text style={styles.text3}>Oct 2023</Text>
        <TouchableOpacity>
          <IconRight />
        </TouchableOpacity>
      </View>
      {activeBudget && (
        <>
          <View
            style={[
              styles.flexrow,
              { padding: 24, justifyContent: "space-between" },
            ]}
          >
            <View>
              <Text style={styles.text3}>Remaining (Monthly)</Text>
              <Text style={styles.text4}>Rp 1.250.000</Text>
            </View>
            <TouchableOpacity
              style={[
                styles.flexrow,
                {
                  backgroundColor: colors.white,
                  padding: 8,
                  borderRadius: 8,
                  borderWidth: 1,
                  borderColor: colors.grey,
                },
              ]}
              onPress={() => navigation.navigate("BudgetSetting")}
            >
              <Text style={styles.text3}>Budget Setting</Text>
              <Gap width={2} />
              <IconRight />
            </TouchableOpacity>
          </View>
          <CardList
            listbudget
            iconUser
            text="Monthly"
            text2="Rp 2.000.000"
            text3="37.5%"
            text4="750.000"
            text5="1.250.000"
            backColorOutView={colors.grey}
            backColorInView={colors.blue}
            widthInView={100}
          />
          <Gap height={10} />
          <CardList
            listbudget
            iconHouseHold
            text="Household"
            text2="Rp 150.000"
            text3="37.5%"
            text4="750.000"
            text5="1.250.000"
            backColorOutView={colors.grey}
            backColorInView={colors.green}
            widthInView={100}
          />
          <CardList
            listbudget
            iconEducation
            text="Education"
            text2="Rp 100.000"
            text3="37.5%"
            text4="750.000"
            text5="1.250.000"
            backColorOutView={colors.grey}
            backColorInView={colors.red}
            widthInView={80}
          />
          <CardList
            listbudget
            iconSocial
            text="Social"
            text2="Rp 200.000"
            text3="37.5%"
            text4="750.000"
            text5="1.250.000"
            backColorOutView={colors.grey}
            backColorInView={colors.yellow}
            widthInView={60}
          />
          <CardList
            listbudget
            iconFood
            text="Food"
            text2="Rp 1.500.000"
            text3="37.5%"
            text4="750.000"
            text5="1.250.000"
            backColorOutView={colors.grey}
            backColorInView={colors.orange}
            widthInView={100}
          />
        </>
      )}
      {activeStatistik && (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={24} />
          <PieChart
            widthAndHeight={widthAndHeight}
            series={series}
            sliceColor={sliceColor}
            coverFill={"#FFF"}
            style={{ alignSelf: "center" }}
          />
          <Gap height={24} />
          <CardList
            listStatistik
            iconFood
            text="Food"
            text2="Rp 1.500.000"
            text3="6.7%"
            text5="1.250.000"
            backColorOutView={colors.grey}
            backColorInView={colors.blue}
            widthInView={100}
          />
          <CardList
            listStatistik
            iconShopping
            text="Food"
            text2="Rp 1.500.000"
            text3="6.7%"
            text5="1.250.000"
            backColorOutView={colors.grey}
            backColorInView={colors.blue}
            widthInView={100}
          />
          <CardList
            listStatistik
            iconHouseHold
            text="Household"
            text2="Rp 150.000"
            text3="6.7%"
            text5="1.250.000"
            backColorOutView={colors.grey}
            backColorInView={colors.blue}
            widthInView={100}
          />
          <CardList
            listStatistik
            iconEducation
            text="Education"
            text2="Rp 100.000"
            text3="13.3%"
            text5="1.250.000"
            backColorOutView={colors.grey}
            backColorInView={colors.blue}
            widthInView={100}
          />
          <CardList
            listStatistik
            iconSocial
            text="Social"
            text2="Rp 200.000"
            text3="13.3%"
            text5="1.250.000"
            backColorOutView={colors.grey}
            backColorInView={colors.blue}
            widthInView={100}
          />
        </ScrollView>
      )}
    </View>
  );
};

export default ReportPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnActive: {
    backgroundColor: colors.blue,
    width: 120,
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  btnInActive: {
    backgroundColor: colors.grey,
    width: 120,
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: fonts.primary.Medium,
    color: colors.white,
    fontSize: 12,
  },
  text2: {
    fontFamily: fonts.primary.Medium,
    color: colors.black,
    fontSize: 12,
  },
  text3: {
    fontFamily: fonts.primary.SemiBold,
    color: colors.black,
    fontSize: 14,
  },
  text4: {
    fontFamily: fonts.primary.Bold,
    color: colors.black,
    fontSize: 24,
  },
  flexrow: {
    flexDirection: "row",
    alignItems: "center",
  },
});
