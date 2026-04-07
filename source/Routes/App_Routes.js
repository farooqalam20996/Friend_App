import React from 'react';
 import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { FontAwesome5, Fontisto, Ionicons } from "@expo/vector-icons";
import Home from "../Screens/Dashboard/Home";
import FriendProfile from "../Screens/Dashboard/FriendProfile";
import Notification from "../Screens/Dashboard/Notification";
import FriendList from "../Screens/FriendList";
import Account from "../Screens/Profile/Account";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import { black, primary, secondary, white } from '../common/colors';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tab_Navigator(params) {
    return (
        <Tab.Navigator initialRouteName="Walls" 
           backBehavior
           screenOptions={{
               headerShown:false,
               tabBarLabelPosition:"below-icon",
               tabBarActiveTintColor:primary,
               tabBarInactiveTintColor:secondary,
               tabBarHideOnKeyboard:true,
               tabBarLabelStyle:{marginBottom:hp("1%") , marginTop:hp("1.8%"), fontFamily:'SemiBold' },
               tabBarStyle:{
                            width:'100%',
                            height:hp("8%"),
                            // borderTopRightRadius:8,
                            // borderTopLeftRadius:8,  
                            backgroundColor:black,
                            // shadowColor:'#273253',
                            // shadowOffset:{width:0 , height: -3},
                            // shadowRadius:23,
                            // elevation:23,
                            // borderTopColor:"#0C1326"
               }
            }}     
        >
            <Tab.Screen name="Friends" component={FriendList} 
               options={{
                   tabBarIcon:({focused}) => (
                       focused ?
                       <FontAwesome5 name="user-friends" size={22} color={primary} style={{ marginBottom:hp("-2%") }} />
                       :
                       <FontAwesome5 name="user-friends" size={22} color={secondary} style={{ marginBottom:hp("-2%") }} />                                
                   )   
               }} 
            />
            <Tab.Screen name="Walls" component={Home_Era}  
                options={{
                    tabBarIcon:({focused}) => (
                        focused ?
                        <Ionicons name="ios-home" size={22} color={primary} style={{ marginBottom:hp("-2%") }} />
                        :
                        <Ionicons name="ios-home" size={22} color={secondary} style={{ marginBottom:hp("-2%") }} />                                
                    )   
                }} 
            />
            <Tab.Screen name="Profile" component={Account_Era} 
                options={{
                   tabBarIcon:({focused}) => (
                         
                           focused ?
                           <Fontisto name="player-settings" size={22} color={primary} style={{ marginBottom:hp("-2%") }} />
                           :
                           <Fontisto name="player-settings" size={22} color={secondary} style={{ marginBottom:hp("-2%") }} />
                       )   
               }} 
            />
        </Tab.Navigator>
    );
}

function Home_Era(params) {
    return(
        <Stack.Navigator screenOptions={{headerShown:false}} >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="FriendProfile" component={FriendProfile} />
            <Stack.Screen name="Notification" component={Notification} />
        </Stack.Navigator>
    )
}

function Account_Era(params) {
    return(
        <Stack.Navigator screenOptions={{headerShown:false}} >
            <Stack.Screen name="Account" component={Account} />
        </Stack.Navigator>
    )
}


function AppRoutes(params) {
        return(
            <Stack.Navigator initialRouteName="Tab_Navigator" screenOptions={{headerShown:false}} >
                <Stack.Screen name="Tab_Navigator" component={Tab_Navigator} />
            </Stack.Navigator>
        )
 }

 export default AppRoutes;