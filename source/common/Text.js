import React from 'react';
import { 
    View,
    Text,
    StyleSheet
 } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { primary } from './colors';

 export default function Custom_Text({SomeTxt, style}) {
     return(
        <Text style={[styles.Txt, {...style}]} >
            {SomeTxt}
        </Text>
     )
 }

 const styles = StyleSheet.create({
     Txt:{
        fontSize:hp("2.7%"),
        fontFamily:"Regular",
        color:primary,
        letterSpacing:2
     }
 })