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
import Noti_Comp from '../../Screen_Component/Noti_Comp';

 export default class Notification extends Component {
     render() {
         return (
            <View style={styles.main} >
                <Header 
                    Hading="Notifications"
                />
               <ScrollView style={{marginTop:hp("2%")}} showsVerticalScrollIndicator={false} >
                    <Noti_Comp 
                        Img={require("../../Imagess/img2.jpg")}
                        Noti_Txt={"What is Lorem Ipsum Lorem Ipsum is "}
                        Accept={true}
                        Name_Txt={"Jorge"}
                    />
                    <Noti_Comp 
                        Img={require("../../Imagess/img5.jpg")}
                        Noti_Txt={"What is Lorem Ipsum Lorem Ipsum is "}
                        Accept={false}
                        Name_Txt={"carry"}
                    />
                    <Noti_Comp 
                        Img={require("../../Imagess/img3.jpg")}
                        Noti_Txt={"What is Lorem Ipsum Lorem Ipsum is "}
                        Accept={true}
                        Name_Txt={"martin"}
                    />
                    <Noti_Comp 
                        Img={require("../../Imagess/img7.jpg")}
                        Noti_Txt={"What is Lorem Ipsum Lorem Ipsum is "}
                        Accept={true}
                        Name_Txt={"john"}
                    />
                    <Noti_Comp 
                        Img={require("../../Imagess/img1.jpg")}
                        Noti_Txt={"What is Lorem Ipsum Lorem Ipsum is "}
                        Accept={false}
                        Name_Txt={"Jorge"}
                    />
                    <Noti_Comp 
                        Img={require("../../Imagess/img3.jpg")}
                        Noti_Txt={"What is Lorem Ipsum Lorem Ipsum is "}
                        Accept={false}
                        Name_Txt={"Alex"}
                    />
                    <Noti_Comp 
                        Img={require("../../Imagess/img7.jpg")}
                        Noti_Txt={"What is Lorem Ipsum Lorem Ipsum is "}
                        Accept={true}
                        Name_Txt={"Cameron"}
                    />
                    <Noti_Comp 
                        Img={require("../../Imagess/img5.jpg")}
                        Noti_Txt={"What is Lorem Ipsum Lorem Ipsum is "}
                        Accept={false}
                        Name_Txt={"herry"}
                    />
               </ScrollView>
            </View>             
         );
     }
 }

 const styles = StyleSheet.create({
    main:{
        flex:1,
       padding:hp("1.8%"),
       paddingBottom:0,
       backgroundColor:white
    }
 })