import React from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
 } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { primary, white } from './colors';

 export default function Button({Onpress, ButtonStyle, TextStyle, btnText}) {
    return(
        <TouchableOpacity onPress={Onpress} activeOpacity={0.75} style={[styles.btn, {...ButtonStyle}]} >
            <Text style={[styles.Txt, {...TextStyle} ]} >
                {btnText}
            </Text>
        </TouchableOpacity>

    )   
 }

 const styles = StyleSheet.create({
     btn:{
        width:"30%",
        height:hp("5%"),
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:primary,
        borderRadius:hp("1%"),
        elevation:5,
     },
     Txt:{
        fontSize:hp("1.8%"),
        fontFamily:"SemiBold",
        color:white
     }
 })