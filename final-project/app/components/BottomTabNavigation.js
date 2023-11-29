import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";

import TopTabNavigation from "./TopTabNavigation";

import HomePage from "../screens/HomePage";
import ProfilePage from "../screens/ProfilePage";
import { resetDate } from "../redux/actions";

export default function BottomTabNavigation() {
  const dispatch = useDispatch();
  const Tab = createBottomTabNavigator();

  const ReportPagePress = () => {
    dispatch(resetDate(new Date().getMonth(), new Date().getFullYear()));
  };

  return (
    <Tab.Navigator
      initialRouteName={"Home"}
      screenOptions={({ route }) => ({
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontSize: 18,
          fontWeight: 700,
          color: "black",
        },
        tabBarActiveTintColor: "#2340DC",
        tabBarInactiveTintColor: "#BBBBBB",
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: 500,
          paddingBottom: 10,
        },
        tabBarStyle: {
          height: 56,
          position: "absolute",
          padding: 8,
          backgroundColor: "#FFFFFF",
          borderTopWidth: 1,
          borderTopColor: "#B0B0B04D",
        },
        tabBarIcon: ({ color }) => {
          let rn = route.name;

          if (rn === "Home")
            return <FontAwesome name="home" size={22} color={color} />;
          else if (rn === "Report")
            return <FontAwesome name="pie-chart" size={20} color={color} />;
          else return <Ionicons name="person-circle" size={25} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Report"
        component={TopTabNavigation}
        listeners={{
          tabPress: ReportPagePress,
        }}
      />
      <Tab.Screen name="Profile" component={ProfilePage} />
    </Tab.Navigator>
  );
}
