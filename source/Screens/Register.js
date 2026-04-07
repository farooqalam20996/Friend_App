import { Entypo, Ionicons } from '@expo/vector-icons';
import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    ImageBackground,
    ScrollView,
    ActivityIndicator
 } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Button from '../common/Button';
import { secondary, white } from '../common/colors';
import Input_Comp from '../common/TextInput';
import Toast from "react-native-easy-toast";
import Firebase from '../Firebase/Config';

 export default class Register extends Component {
     state = { 
        name:"", 
        email:"",
        password:"",
        C_password:"",
        isLoading:false
      }

      Register_Now = () => {
        if(this.state.email === '' || this.state.password === ''|| this.state.C_password=="" || this.state.name=="") {
            this.toast.show("Please fill all fileds", 1000 )
          } 
          else if(this.state.password !== this.state.C_password){
            this.toast.show("password is not same", 1000 )
          }
          else if(this.state.password.length < 6){
            this.toast.show("password min 6 characters", 1000 )
          }
          else {
            this.setState({
              isLoading: true,
            })
            Firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((res) => {
                  console.log('User registered successfully!')
                    this.setState({
                        isLoading: false,
                        name: '',
                        email: '', 
                        password: ''
                    })
                this.props.navigation.navigate('Login')
            })
            .catch(error => console.log(error), 
                this.setState({isLoading:false}),
                this.toast.show("something wrong", 1000))      
          }
        }
      
      
     render() {
         return (
                <ScrollView style={{flex:1}} >
            <ImageBackground source={require("../Imagess/login1.png")} style={styles.main} >
                    <Input_Comp 
                        value={this.state.name}
                        ChangeText={(text)=> this.setState({name: text})}
                        // IconName={"md-mail"}
                        AddIcons={<Ionicons name="ios-person" size={hp("3%")} color="white" />}
                        otherProps={{ placeholder:"Enter your name", placeholderTextColor:"white", keyboardType:"email-address" }}
                    />
                    <Input_Comp 
                        value={this.state.email}
                        ChangeText={(text)=> this.setState({email: text})}
                        // IconName={"md-mail"}
                        AddIcons={<Ionicons name={"md-mail"} size={hp("3%")} color="white" />}
                        otherProps={{ placeholder:"Enter your email", placeholderTextColor:"white", keyboardType:"email-address" }}
                    />
                    <Input_Comp 
                        value={this.state.password}
                        ChangeText={(text)=> this.setState({password: text})}
                        // IconName={"md-lock"}
                        AddIcons={<Entypo name={"lock"} size={hp("3%")} color="white" />}
                        otherProps={{ placeholder:"Enter your password",secureTextEntry:true, placeholderTextColor:"white", keyboardType:"email-address" }}
                    />

                    <Input_Comp 
                        value={this.state.C_password}
                        ChangeText={(text)=> this.setState({C_password: text})}
                        // IconName={"md-lock"}
                        AddIcons={<Entypo name={"lock"} size={hp("3%")} color="white" />}
                        otherProps={{ placeholder:"Confirm password",secureTextEntry:true, placeholderTextColor:"white", keyboardType:"email-address" }}
                    />

                   {
                       this.state.isLoading?
                        <ActivityIndicator size={"large"} color={"white"} />
                        :
                        <Button
                            btnText={"Register"}
                            Onpress={this.Register_Now}
                            ButtonStyle={{marginBottom:hp("2%")}}
                        />
                   }

                    <View style={{height:hp("30%")}} />

            </ImageBackground>
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
                </ScrollView>
         );
     }
 }

 const styles = StyleSheet.create({
     main:{
         flex:1,
         alignItems:"center",
        //  justifyContent:"center",
         padding:hp("1.6%"),
         paddingTop:hp("35%")
     },
     Txt:{
        fontSize:hp("1.8%"),
        fontFamily:"Regular",
        color:white
     }
 })