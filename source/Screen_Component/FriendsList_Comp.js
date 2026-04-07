import React, { useState } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Image
 } from 'react-native';
import { heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Button from '../common/Button';
import { primary, secondary, white } from '../common/colors';
import Custom_Text from '../common/Text';

 export default function FriendList_Comp({img, Name}) {

    const [Req, setReq] = useState(false);
    return(
        <View style={styles.main} >
            <View style={{flexDirection:'row', alignItems:"center", justifyContent:"flex-start"}} >  
                <Image source={img} style={styles.img} />
                <Custom_Text 
                    SomeTxt={Name}
                    style={{fontSize:hp("2%"), marginLeft:hp("1%")}}
                />
            </View>

            {
                Req?
                    <View style={{marginTop:hp("2%"), flexDirection:"row", alignItems:"center", justifyContent:"center", alignSelf:"flex-end"}} >
                        <Button
                            btnText={"Request sent"} 
                            ButtonStyle={styles.btn} 
                            // Onpress={()=> setReq(!Req)}
                        />
                        <Button
                            btnText={"cancel Request"} 
                            ButtonStyle={styles.btn0} 
                            TextStyle={{color:"red"}}
                            Onpress={()=> setReq(!Req)}
                        />
                    </View>
                    :
                    // <View style={{marginTop:hp("2%"),  alignSelf:"flex-end"}} >
                        <Button
                            btnText={"Send Reguest"} 
                            ButtonStyle={styles.btn1} 
                            Onpress={()=> setReq(!Req)}
                        />
                    // </View>
            }
        </View>
    );
 }

 const styles = StyleSheet.create({
     main:{
        width:"100%",
        minHeight:hp("13%"),
        borderRadius:hp("0.5%"),
        // flexDirection:'column',
        // alignItems:"center",
        // justifyContent:"space-between",
        padding:hp("1.2%"),
        borderColor:primary,
        borderWidth:hp("0.2%"),
        marginBottom:hp("1.5%")

     },
    btn1:{
        width:"35%",
        height:hp("4.5%"),
        backgroundColor:secondary,
        alignSelf:"flex-end",
        marginTop:hp("2%")
    },
    btn:{
        width:"35%",
        height:hp("4.5%"),
        backgroundColor:primary,
    },
    btn0:{
        width:"35%",
        height:hp("4.5%"),
        backgroundColor:white,
        borderColor:"red",
        borderWidth:hp("0.2%"),
        marginLeft:hp("1%")
    },
    img:{
        width:hp("5%"), 
        height:hp("5%"), 
        borderRadius:100,
        borderWidth:hp("0.2%"),
        borderColor:primary,
    },
 })