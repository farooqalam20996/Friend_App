import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet
 } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { primary, secondary, white } from '../common/colors';
import Header from '../common/Header';
import Input_Comp from '../common/TextInput';
import FriendList_Comp from '../Screen_Component/FriendsList_Comp';
import { FontAwesome } from '@expo/vector-icons';
import Toast, {DURATION} from "react-native-easy-toast";

var axios = require('axios');

var that;

export default class Friend_List extends Component {
      
    constructor(props){
        super(props);
        this.state = {
            Search:"",
            Loader:false,
            Failed:false,
        }
    }

    componentDidMount(){
        that=this;
        // this.FriendsList()
    }

    // FriendsList = () => {
    //     that.setState({Loader:true})
    //     var config = {
    //         method: 'get',
    //         url: 'https://jsonplaceholder.typicode.com/users',
    //         // headers: { }
    //     };

    //     axios(config)
    //     .then(function (response) {
    //         if(response.data){
    //             console.log(JSON.stringify(response.data));
    //             that.setState({Loader:false})
    //             that.toast.show("You get user", 2000)

    //         }
    //         else{
    //             console.log(JSON.stringify(response.data));
    //             that.setState({Loader:false})
    //             this.toast.show("There has some problem Occured", 1000)
    //         }
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //         that.setState({Loader:false})
    //         this.toast.show("There has some problem Occured", 1000)
    //     });
    // }


     render() {
         return (
            <View style={styles.main} >
                <Header 
                    Hading={"Friends List"}
                />
                <View style={{marginVertical:hp("2%")}} >
                        <Input_Comp 
                            value={this.state.Search}
                            ChangeText={(text)=> this.setState({Search: text})}
                            style={{color:secondary}}
                            otherProps={{placeholder:"Search", placeholderTextColor:primary}}
                            AddIcons={<FontAwesome name="search" size={hp("3%")} color={primary} />}
                        />
                </View>
               <ScrollView showsVerticalScrollIndicator={false} >
                <FriendList_Comp 
                        Name={"Richard"}
                        img={require("../Imagess/img1.jpg")}
                    />

                    <FriendList_Comp 
                        Name={"Frenksah henny"}
                        img={require("../Imagess/img3.jpg")}
                    />

                    <FriendList_Comp 
                        Name={"martin "}
                        img={require("../Imagess/img6.jpg")}
                    />

                    <FriendList_Comp 
                        Name={"hinra lur"}
                        img={require("../Imagess/img4.jpg")}
                    />

                    <FriendList_Comp 
                        Name={"mackay"}
                        img={require("../Imagess/img7.jpg")}
                    />

                    <FriendList_Comp 
                        Name={"kasim"}
                        img={require("../Imagess/img5.jpg")}
                    />
               </ScrollView>
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
         );
     }
 }

 const styles = StyleSheet.create({
     main:{
        flex:1,
        backgroundColor:white,
        padding:hp("1.8%"),
        paddingBottom:0
     }
 })