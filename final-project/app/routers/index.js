import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { BudgetSetting, BudgetSettingDetail, ReportPage } from '../pages';

const Stack = createNativeStackNavigator();

const Routers = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="ReportPage" component={ReportPage} />
            <Stack.Screen name="BudgetSetting" component={BudgetSetting} />
            <Stack.Screen name="BudgetSettingDetail" component={BudgetSettingDetail} />
        </Stack.Navigator>
    )
}

export default Routers

const styles = StyleSheet.create({})