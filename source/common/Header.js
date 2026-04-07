import React from 'react';
import { 
    View,
    Text,
    StyleSheet
 } from 'react-native';
 import {FontAwesome, Ionicons} from "@expo/vector-icons";
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { black, primary, secondary, white } from './colors';
import {useNavigation} from "@react-navigation/native";

export default function Header({Hading}) {
    const navigation = useNavigation();
     return(
         <View style={styles.main} >
             <FontAwesome name="user-circle-o"size={hp("4%")} color={primary} onPress={()=>navigation.navigate("Profile") } />
             <Text style={styles.Heading} >  
                {Hading}
             </Text>
             <Ionicons name="ios-notifications" size={hp("4%")} color={primary}  onPress={()=>navigation.navigate("Notification") }/>
         </View>
     )
 }

 const styles = StyleSheet.create({
     main:{
         width:"100%",
        // flex:1,
        backgroundColor:white,
        height:hp("6%"),
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginTop:hp("1%")
     },
     Heading:{
        fontSize:hp("2.7%"),
        fontFamily:"Regular",
        color:primary,
        letterSpacing:2
     }
 })