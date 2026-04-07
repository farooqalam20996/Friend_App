import React from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TextInput
 } from 'react-native';
 import {Ionicons} from "@expo/vector-icons";
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { primary, white } from './colors';

export default function Input_Comp({value, ChangeText, AddIcons, style, otherProps, mainStyle}) {
    return(
        <View style={[styles.main, {...mainStyle}]} >
            <TextInput
                value={value}
                onChangeText={ChangeText}
                style={[styles.InputStyle, {...style}]}
                {...otherProps}
            />
            {AddIcons}
        </View>
    )
 }

 const styles = StyleSheet.create({
    main:{
        width:"100%",
        // flex:1,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around",
        // backgroundColor:"white",
        borderColor:primary,
        borderWidth:hp("0.1%"),
        borderRadius:hp("0.5%"),
        marginBottom:hp("2%"),
        paddingVertical:hp("0.5%")
    },
    InputStyle:{
        width:"90%",
        height:hp("5%"),
        paddingHorizontal:hp("1.3%"),
        paddingVertical:hp("0.5%"),
        fontSize:hp("1.8%"),
        fontFamily:"Regular",
        color:white
    }
 })

