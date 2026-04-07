import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Image
 } from 'react-native';
import { heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { black, primary, secondary } from '../../common/colors';
import Custom_Text from '../../common/Text';
import { AntDesign, Entypo, Ionicons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Modal from "react-native-modal";
import Firebase from '../../Firebase/Config';
import Toast from "react-native-easy-toast";


 export default class Account extends Component {
      constructor(props){
          super(props);
          this.state={
              Show_Modal:false,

          }
      }

      signOut = () => {
        Firebase.auth().signOut().then(() => {
          this.props.navigation.navigate('Login')
        })
        .catch(error => console.log(error),
                this.toast.show("Something wrong", 1000)
        )
      }  

     render() {
         return (
            <>
                <Image source={require("../../Imagess/img3.jpg")} resizeMode="cover" style={styles.Bg_Img} />
                <Image source={require("../../Imagess/img7.jpg")} resizeMode="cover" style={styles.Pro_Img} />
                <Custom_Text SomeTxt={"Richard Folk"} style={{ top:hp("5%"), alignSelf:"center", fontFamily:"Bold" }} />
                <Entypo onPress={()=> alert("In Progress")} name="camera" size={hp("4%")} color={"gray"} style={[styles.Pro_Img,{alignSelf:"flex-start", borderWidth:0, top:hp("25%"), marginLeft:hp("2%")}]} />
                <View style={styles.main} >
                    <Comp
                        Add_Icon={<AntDesign name="edit" size={hp("3%")} color={primary} />}
                        Name={"Edit"}
                    />
                     <Comp
                        Add_Icon={<Entypo name="location" size={hp("3%")} color={primary} />}
                        Name={"Location"}
                    />
                     <Comp
                        Add_Icon={<MaterialCommunityIcons name="wall" size={hp("3%")} color={primary} />}
                        Name={"My Walls"}
                    />
                     <Comp
                        Add_Icon={<Ionicons name="ios-notifications" size={hp("3%")} color={primary} />}
                        Name={"Notification"}
                    />
                    <Comp
                        Add_Icon={<AntDesign name="logout" size={hp("3%")} color={primary} />}
                        Name={"Log Out"}
                        Onpress={this.signOut}
                    />
                     <Toast 
                        ref={(toast) => this.toast = toast}
                        style={{backgroundColor:secondary}}
                        position='center'
                        positionValue={200}
                        fadeInDuration={750}
                        fadeOutDuration={1000}
                        opacity={0.8}
                        textStyle={{color:'red'}}
                    />
                </View>
                {/* <Modal 
                    isVisible={this.state.Show_Modal}
                    onBackdropPress={()=> this.setState({Show_Modal: false})}
                    onBackButtonPress={()=> this.setState({Show_Modal: false})}
                    animationIn="slideInUp"
                    animationInTiming={500}
                    // animationOut="slideInDown"
                    // animationOutTiming={800}
                    style={{flex:1,alignSelf:"center", width:"99%",alignItems:"center", justifyContent:"flex-end"}}
                >   
                    <View style={styles.Modal_Container} >
                        <View style={{alignItems:"center"}} >
                            <FontAwesome name="image" size={hp("3%")} color={primary} />
                            <Custom_Text SomeTxt={"Gallery"} style={{fontSize:hp("1.6%"), fontFamily:"SemiBold"}} />
                        </View>

                        <View style={{alignItems:"center"}} >
                            <Entypo name="camera" size={hp("3%")} color={primary} />
                            <Custom_Text SomeTxt={"Photo"} style={{fontSize:hp("1.6%"), fontFamily:"SemiBold"}} />
                        </View>
                    </View>
                </Modal> */}
            </>       
         );
     }
 }
 function Comp({Add_Icon, Name, Onpress}) {
     return(
         <TouchableOpacity style={styles.Container} onPress={Onpress} >
             {Add_Icon}
            <Custom_Text
                SomeTxt={Name}
                style={{fontSize:hp("2.3%"), marginLeft:hp("2%")}}
            />
         </TouchableOpacity>
     )
 }

 const styles = StyleSheet.create({
     main:{
         flex:1,
         padding:hp("1.6%"),
         marginTop:hp("10%")
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
    Container:{
        width:"100%",
        flexDirection:"row",
        alignItems:'center',
        justifyContent:"flex-start",
        borderRadius:hp("0.8%"),
        borderColor:primary,
        borderWidth:hp("0.2%"),
        padding:hp("0.8%"),
        marginBottom:hp("2%")
    },
    Modal_Container:{
        top:hp("5%"),
        alignSelf:"flex-end",
        width:"100%",
        height:hp("25%"),
        backgroundColor:"white",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around"
    }
 })