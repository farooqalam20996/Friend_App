import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet
 } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { white } from '../../common/colors';
import Header from '../../common/Header';
import Custom_Text from '../../common/Text';
import Home_Comp from '../../Screen_Component/Home_Comp';

 export default class Home extends Component {
      
     render() {
         return (
             <>
                <View style={styles.main} >
                    <Header 
                        Hading={"Wall"}
                    />
                    <Custom_Text 
                        style={{fontSize:hp("2.5%"), marginTop:hp("2%"), fontFamily:"Bold", letterSpacing:0.1}}
                        SomeTxt={"Friends Wall Post"}
                    />
                    <ScrollView showsVerticalScrollIndicator={false} >
                        <Home_Comp
                            ProfileImg={require("../../Imagess/img.jpg")}
                            PostText="What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?                    "
                            ifPost={true}
                            PostImg={require("../../Imagess/img1.jpg")}
                            Name={"Carry Kin"}
                        />
                        <Home_Comp
                            ProfileImg={require("../../Imagess/img2.jpg")}
                            PostText="What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?                    "
                            ifPost={true}
                            PostImg={require("../../Imagess/img3.jpg")}
                            Name={"John Frenk"}

                        />

                        <Home_Comp
                            ProfileImg={require("../../Imagess/img7.jpg")}
                            PostText="What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?                    "
                            ifPost={true}
                            PostImg={require("../../Imagess/img2.jpg")}
                            Name={"Herry"}

                        />

                        <Home_Comp
                            ProfileImg={require("../../Imagess/img3.jpg")}
                            PostText="What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?                    "
                            ifPost={true}
                            PostImg={require("../../Imagess/img4.jpg")}
                            Name={"Martin"}

                        />

                        <Home_Comp
                            ProfileImg={require("../../Imagess/img4.jpg")}
                            PostText="What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?                    "
                            ifPost={true}
                            PostImg={require("../../Imagess/img6.jpg")}
                            Name={"Jerry Menk"}

                        />
                        <Home_Comp
                            ProfileImg={require("../../Imagess/img.jpg")}
                            PostText="What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?                    "
                            ifPost={true}
                            PostImg={require("../../Imagess/img5.jpg")}
                            Name={"Shela mansi"}
                        />
                    </ScrollView>
                </View>       
             </>
         );
     }
 }

 const styles = StyleSheet.create({
     main:{
         flex:1,
         backgroundColor:white,
         padding:hp("1.8%"),
         paddingBottom:0
        //  justifyContent:"center",
        //  alignItems:"center"
     }
 })