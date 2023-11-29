import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import GettingStarted from "../screens/GettingStarted";
import LoginPage from "../screens/LoginPage";
import RegisterPage from "../screens/RegisterPage";
import AddIncome from "../screens/AddIncome";
import AddExpense from "../screens/AddExpense";
import TransactionDetails from "../screens/TransactionDetails";
import BottomTabNavigation from "./BottomTabNavigation";
import BudgetSettings from "../screens/BudgetSettings";

export default function Navbar() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Default"
        screenOptions={{
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: 700,
            color: "black",
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
          component={BottomTabNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Add Income" component={AddIncome} />
        <Stack.Screen name="Add Expense" component={AddExpense} />
        <Stack.Screen
          name="Transaction Details"
          component={TransactionDetails}
        />
        <Stack.Screen name="Budget Settings" component={BudgetSettings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
