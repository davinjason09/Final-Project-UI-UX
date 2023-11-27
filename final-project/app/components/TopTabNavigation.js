import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Budget from "../screens/Budget";
import Statistics from "../screens/Statistics";
import MonthYearTab from "./MonthYearTab";

function MyTabBar({ state, descriptors, navigation }) {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const handleSelectMonth = (selectedMonth, selectedYear) => {
    setSelectedMonth(selectedMonth);
    setSelectedYear(selectedYear);
  };

  return (
    <View style={{ backgroundColor: "#F7F8F9" }}>
      <View
        style={{
          flexDirection: "row",
          alignSelf: "center",
          marginTop: 24,
          marginBottom: 15,
        }}
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          return (
            <TouchableOpacity
              key={index}
              onPress={onPress}
              activeOpacity={1}
              style={{
                width: "35%",
                height: 36,
                backgroundColor: isFocused ? "#2340DC" : "#D9D9D9",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: isFocused ? "#FFFFFF" : "#000000",
                  fontSize: 13,
                  fontWeight: 700,
                }}
              >
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <MonthYearTab onSelectMonth={handleSelectMonth} />
    </View>
  );
}

export default function TopTabNavigation() {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator
      tabBar={(props) => <MyTabBar {...props} />}
      screenOptions={{
        tabBarStyle: { alignSelf: "center" },
      }}
    >
      <Tab.Screen name="Budget" component={Budget} />
      <Tab.Screen name="Statistics" component={Statistics} />
    </Tab.Navigator>
  );
}
