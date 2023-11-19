import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";

import HomePage from "../screens/HomePage";
import ReportPage from "../screens/ReportPage";
import ProfilePage from "../screens/ProfilePage";

const homeName = "Home";
const reportName = "Report";
const profileName = "Profile";

const Tab = createBottomTabNavigator();

export default function Navbar() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: "#2340DC",
          tabBarInactiveTintColor: "#BBBBBB",
          tabBarLabelStyle: {
            fontSize: 10,
            paddingBottom: 10,
          },
          tabBarStyle: {
            height: 56,
            position: "absolute",
            padding: 10,
            backgroundColor: "#FFFFFF",
          },

          tabBarIcon: ({ color }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) iconName = "home";
            else if (rn === reportName) iconName = "pie-chart";
            else if (rn === profileName) iconName = "user-circle";

            return <FontAwesome name={iconName} size={22} color={color} />;
          },
        })}
      >
        <Tab.Screen name={homeName} component={HomePage} />
        <Tab.Screen name={reportName} component={ReportPage} />
        <Tab.Screen name={profileName} component={ProfilePage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
