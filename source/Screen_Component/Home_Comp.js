import React, { useState } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
 } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Button from '../common/Button';
import { black, primary, secondary, white } from '../common/colors';
import Custom_Text from '../common/Text';
import {useNavigation} from "@react-navigation/native";

 export default function Home_Comp({PostText, ProfileImg, PostImg, ifPost, Name}) {
     const [Like, setLike] = useState(false);
     const navigation = useNavigation();

     return(
         <View style={styles.main} >
                <TouchableOpacity onPress={()=> navigation.navigate("FriendProfile", {Profile:ProfileImg, User:Name})} style={{flexDirection:"row", alignItems:"center", justifyContent:"flex-start", marginBottom:hp("1%")}} >
                    <Image source={ProfileImg} style={styles.img} />
                    <Custom_Text 
                        SomeTxt={Name}
                        style={styles.Txt}
                    />
                </TouchableOpacity>
                <Custom_Text 
                        SomeTxt={PostText}
                        style={styles.Pos_Txt}
                />
                {
                    ifPost&&
                    <Image source={PostImg} style={[styles.img, {width:"100%", height:hp("30%"), borderRadius:0, marginTop:hp("1%")}]} resizeMode="cover" />
                }
                <View style={styles.reaction} >  
                    <Button  
                        btnText={ Like?"Likes":"Like"}
                        // TextStyle={}
                        ButtonStyle={Like?styles.btn1:styles.btn}
                        Onpress={()=> setLike(!Like)}
                    />
                    <Button  
                        btnText={"comment"}
                        // TextStyle={}
                        ButtonStyle={styles.btn}
                    />
                    <Button  
                        btnText={"share"}
                        // TextStyle={}
                        ButtonStyle={styles.btn}
                    />
                </View>
                <View style={[styles.reaction, {marginTop:0, height:hp("4%"), justifyContent:"flex-start"}]} >  
                    <Custom_Text 
                        SomeTxt={Like?"1 Likes":"0 Likes"}
                        style={styles.Txt}
                    />
                    <Custom_Text 
                        SomeTxt={"0 comments"}
                        style={styles.Txt}
                    />
                    <Custom_Text 
                        SomeTxt={"0 shares"}
                        style={styles.Txt}
                    />
                </View>
                    
         </View>
     )
 }

 const styles = StyleSheet.create({
     main:{
         width:"100%",
         minHeight:hp("30%"),
         backgroundColor:white,
         padding:hp("1.5%"),
         borderRadius:hp("0.8%"),
         borderColor:primary,
         borderWidth:hp("0.2%"),
         marginBottom:hp("2%")
     },
     Txt:{
        fontSize:hp("1.5%"),
        fontFamily:"SemiBold",
        color:primary,
        letterSpacing:0,
        marginLeft:hp("1%")
     },
     Pos_Txt:{
        fontSize:hp("1.5%"),
        fontFamily:"Regular",
        color:black,
        letterSpacing:0,
        // marginLeft:hp("1%")
     },
     img:{
        width:hp("5%"), 
        height:hp("5%"), 
        borderRadius:100,
        borderWidth:hp("0.2%"),
        borderColor:primary,
    },
    reaction:{
        width:"100%",
        height:hp("10%"),
        padding:hp("1%"),
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        backgroundColor:white,
        // padding:hp("1.5%"),
        // borderRadius:hp("0.8%"),
        // borderColor:secondary,
        // borderWidth:hp("0.2%"),
        marginTop:hp("1%")
    },
    btn:{
        width:"28%",
        height:hp("4.5%"),
        backgroundColor:secondary,
    },
    btn1:{
        width:"28%",
        height:hp("4.5%"),
        backgroundColor:primary,
    }
 })