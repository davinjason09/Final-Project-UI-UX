import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

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
            padding: 8,
            backgroundColor: "#FFFFFF",
          },

          tabBarIcon: ({ color }) => {
            let rn = route.name;

            if (rn === homeName)
              return <FontAwesome name="home" size={22} color={color} />;
            else if (rn === reportName)
              return <FontAwesome name="pie-chart" size={20} color={color} />;
            else
              return <Ionicons name="person-circle" size={25} color={color} />;
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
