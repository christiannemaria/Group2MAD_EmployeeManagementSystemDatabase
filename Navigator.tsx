import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";

import Tasks from './Tasks';
import LoginPage from './HomePage';

const Navigator = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false}}>
            {/* <Stack.Screen name='login' component={HomePage} /> */}
            <Stack.Screen name='Tasks' component={Tasks} />
            <Stack.Screen name="login" component={LoginPage} />
            
        </Stack.Navigator>
    );
}

export default Navigator;

