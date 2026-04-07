import { Entypo, Ionicons } from '@expo/vector-icons';
import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    ImageBackground,
    ActivityIndicator
 } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Button from '../common/Button';
import { secondary, white } from '../common/colors';
import Input_Comp from '../common/TextInput';
import Toast from "react-native-easy-toast";
import Firebase from '../Firebase/Config';

 export default class Login extends Component {
     state = { 
         email:"",
         password:"",
         Failed:false,
         isLoading:false
      }

      Login_Now = ()=> {
        if(this.state.email === '' && this.state.password === '') {
            this.toast.show("Kindly Fill all field first", 1000)
          } else {
            this.setState({
              isLoading: true,
            })
            Firebase
            .auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((res) => {
              console.log(res)
              console.log('User logged-in successfully!')
              this.setState({
                isLoading: false,
                email: '', 
                password: ''
              })
              this.props.navigation.navigate('AppRoute')
            })
            .catch(error => console.log(error), 
                this.setState({isLoading: false}),
                this.toast.show("Something went wrong..", 1000)
            )
          }
      }
      
     render() {
         return (
            <ImageBackground source={require("../Imagess/login1.png")} style={styles.main} >
                {/* <ScrollView > */}
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
                    {
                        this.state.isLoading ? 
                            <ActivityIndicator size={"large"} color={white} />
                            :
                            <Button
                                btnText={"Log In"}
                                Onpress={this.Login_Now}
                                ButtonStyle={{marginBottom:hp("2%")}}
                            />
                    }

                    <Text style={styles.Txt} >
                        forget password?
                    </Text>

                    <Text style={[styles.Txt, {marginTop:hp("8%")}]} onPress={()=> this.props.navigation.navigate("Register")} >
                        create new account?
                    </Text>
                {/* </ScrollView> */}
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
            </ImageBackground>
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