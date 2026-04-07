import { Ionicons } from '@expo/vector-icons';
import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Image
 } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { black, primary, secondary } from '../../common/colors';
import Header from '../../common/Header';
import Custom_Text from '../../common/Text';

 export default class Friend_Profile extends Component {
      
    constructor(props){
        super(props);
        this.state={
            Profile_Img: this.props.route.params.Profile,
            User:this.props.route.params.User
        }
    }

     render() {
         return (
             <>
                <Image source={this.state.Profile_Img} resizeMode="cover" style={styles.Bg_Img} />
                <Image source={this.state.Profile_Img} resizeMode="cover" style={styles.Pro_Img} />
                <Ionicons name="md-arrow-back" onPress={()=> this.props.navigation.goBack()} size={hp("4%")} color="white" style={{position:"absolute", top:hp("2%"), left:hp("1%")}} />
                <View style={styles.main} >
                    <Custom_Text SomeTxt={this.state.User} style={{fontSize:hp("2.5%"), alignSelf:"center", marginTop:hp("2%") , fontFamily:"Bold"}} />
                    <Custom_Text SomeTxt={"you both are friends"} style={{fontSize:hp("1.5%"), color:"gray", alignSelf:"center", marginTop:hp("0.5%") , fontFamily:"Bold"}} />

                    <Custom_Text SomeTxt={"Details"} style={{fontSize:hp("2%"), color:secondary, alignSelf:"flex-start", marginTop:hp("1.5%") , fontFamily:"Bold"}} />
                    <Custom_Text SomeTxt={this.state.User} style={{fontSize:hp("2%"), color:black, alignSelf:"flex-start", marginTop:hp("1%") , fontFamily:"SemiBold"}} />
                    <Custom_Text SomeTxt={"24 yrs Old"} style={{fontSize:hp("2%"), color:black, alignSelf:"flex-start", marginTop:hp("0.25%") , fontFamily:"SemiBold"}} />
                    <Custom_Text SomeTxt={"Developer"} style={{fontSize:hp("2%"), color:black, alignSelf:"flex-start", marginTop:hp("0.25%") , fontFamily:"SemiBold"}} />
                    <Custom_Text SomeTxt={"2.5 yrs of expreince"} style={{fontSize:hp("2%"), color:black, alignSelf:"flex-start", marginTop:hp("0.25%") , fontFamily:"SemiBold"}} />
                    
                </View>       
             </>
         );
     }
 }

 const styles = StyleSheet.create({
     main:{
         flex:1,
         padding:hp("1.8%"),
         marginTop:hp("3%")
     },
     Bg_Img:{
        width:"100%",
        height:hp("30%")
    },
    Pro_Img:{
       position:"absolute",
       width:hp("15%"), 
       height:hp("15%"), 
       borderRadius:100,
       borderWidth:hp("0.2%"),
       borderColor:primary,
       top:hp("20%"),
       // marginLeft:hp("1.5%")
       alignSelf:"center"
   },
 })