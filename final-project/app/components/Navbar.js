import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

import GettingStarted from "../screens/GettingStarted";
import LoginPage from "../screens/LoginPage";
import RegisterPage from "../screens/RegisterPage";
import HomePage from "../screens/HomePage";
import AddIncome from "../screens/AddIncome";
import AddExpense from "../screens/AddExpense";
import TransactionDetails from "../screens/TransactionDetails";
import ReportPage from "../screens/ReportPage";
import ProfilePage from "../screens/ProfilePage";

const homeName = "Home";
const reportName = "Report";
const profileName = "Profile";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function BottomNavbar() {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        headerShown: false,
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

          if (rn === homeName)
            return <FontAwesome name="home" size={22} color={color} />;
          else if (rn === reportName)
            return <FontAwesome name="pie-chart" size={20} color={color} />;
          else return <Ionicons name="person-circle" size={25} color={color} />;
        },
      })}
    >
      <Tab.Screen name={homeName} component={HomePage} />
      <Tab.Screen name={reportName} component={ReportPage} />
      <Tab.Screen name={profileName} component={ProfilePage} />
    </Tab.Navigator>
  );
}

export default function Navbar() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Getting Started"
        screenOptions={{
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: 700,
            color: "#1D232E",
          },
        }}
      >
        <Stack.Screen
          name="Getting Started"
          component={GettingStarted}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Default"
          component={BottomNavbar}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Add Income" component={AddIncome} />
        <Stack.Screen name="Add Expense" component={AddExpense} />
        <Stack.Screen
          name="Transaction Details"
          component={TransactionDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
