import React from 'react';
 import {NavigationContainer} from "@react-navigation/native";
 import {createStackNavigator} from "@react-navigation/stack";
import Login from '../Screens/Login';
import Register from '../Screens/Register';
import AppRoute from "../Routes/App_Routes";

const Stack = createStackNavigator();

 function AuthRoutes(params) {
        return(
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}} >
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Register" component={Register} />
                    <Stack.Screen name="AppRoute" component={AppRoute} />
                </Stack.Navigator>
        </NavigationContainer>
        )
 }

 export default AuthRoutes;