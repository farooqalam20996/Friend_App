import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from "expo-app-loading";
import {useFonts} from "@use-expo/font";
import AuthRoutes from './source/Routes/Auth_Routes';


export default function App() {


  const [isloading] = useFonts({
              "Bold":require('./assets/fonts/Poppins/Poppins-Bold.ttf'),
              "Light":require('./assets/fonts/Poppins/Poppins-Light.ttf'),
              "Medium":require('./assets/fonts/Poppins/Poppins-Medium.ttf'),
              "Regular":require('./assets/fonts/Poppins/Poppins-Regular.ttf'),
              "SemiBold":require('./assets/fonts/Poppins/Poppins-SemiBold.ttf'),
              "Thin":require('./assets/fonts/Poppins/Poppins-Thin.ttf'),
  });

  if(!isloading){
    return <AppLoading />
  }
  else{ 
    return (
        //  <Provider store={stores} >
            <>
              <AuthRoutes />
              {/* <StatusBar backgroundColor="#060A16" barStyle="light-content" /> */}
            </>
        //  </Provider>
      );
    }
  }