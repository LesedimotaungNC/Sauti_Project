import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button,
    TouchableOpacity,

} from "react-native";


import Icon from 'react-native-vector-icons/Ionicons'
import {createStackNavigator} from 'react-navigation'
import MenuButton from '../../components/MenuButton'

import ProScreen1 from '../Profile/ProScreen1'
import ProScreen2 from '../Profile/ProScreen2'


class ProfileScreen extends Component {    
      render() {
        return (
          <View style={styles.container}>
            <Text>Profile</Text>
          </View>
        );
      }
    }

    const ProfileStackNav = createStackNavigator({
            Profile:{
                screen: ProfileScreen,
                navigationOptions: ({navigation}) => ({
                    title: 'Profile' ,
                    headerLeft: (
                        <MenuButton navigation={navigation}/>
                    ),
                    headerRight: (
                        <TouchableOpacity>
                        <View style={{paddingHorizontal: 10}}>
                            <Icon name="ios-chatbubbles" size={24} color="#fff" />
                        </View>
                        </TouchableOpacity>
                    ), headerStyle:{
                        backgroundColor: '#FE4C59'
                    },
                    headerTitleStyle:{
                        color: "#fff"
                    }
                    })
            },
            Profile1: ProScreen1,
            Profile2: ProScreen2,
        })

export default class ProfileStack extends Component {
    render(){
        return (
        <ProfileStackNav />

        )}      
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});