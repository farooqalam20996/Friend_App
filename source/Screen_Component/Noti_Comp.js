import React, { useState } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
 } from 'react-native';
import { heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { black, primary, secondary } from '../common/colors';
import Custom_Text from '../common/Text';

 export default function Noti_Comp({Accept, Noti_Txt, Img, Name_Txt} ) {
     const[ok, SetOk] = useState(Accept)
     return(
         <TouchableOpacity onPress={()=> SetOk(!ok)} style={[styles.container, {backgroundColor:ok?"lightblue":"white"}]} >
            <View style={{flexDirection:"row", alignItems:"center", justifyContent:"flex-start"}} >
                <Image source={Img} style={styles.img} />
                <Custom_Text SomeTxt={Name_Txt} style={{fontFamily:"Bold", fontSize:hp("1.8%"), marginLeft:hp("2%")}} />
            </View>
            <Custom_Text SomeTxt={Noti_Txt} style={{fontFamily:"Regular", fontSize:hp("1.5%"), color:black, marginTop:hp("1%")}} />
         </TouchableOpacity>
     )
 }

 const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:hp("12%"),
        borderRadius:hp("0.8%"),
        borderColor:secondary,
        borderWidth:hp("0.2%"),
        padding:hp("0.8%"),
        marginBottom:hp("2%")
    },  
    img:{
        width:hp("5%"), 
        height:hp("5%"), 
        borderRadius:100,
        borderWidth:hp("0.2%"),
        borderColor:primary,
    },
 })