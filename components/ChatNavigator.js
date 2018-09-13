import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Icon,

} from "react-native";

import {createMaterialTopTabNavigator, createStackNavigator, createDrawerNavigator} from 'react-navigation'

import {AppStackNavigator } from './MainNav'
import Announcements from '../screens/Announcements'
import HomeScreen from '../screens/HomeScreen'
import SettingScreen from '../screens/SettingsScreen'

// Chat Screens
import ChatListScreen from '../screens/chat/ChatListScreen'
import ContactListScreen from '../screens/chat/ContactListScreen'
import CallsScreen from '../screens/chat/CallsScreen'


export default class ChatNavigator extends Component {
    render(){
        return(
            <ChatStackNavigator />
        );
    }
}
const ChatTabNavigator = createMaterialTopTabNavigator({
  Chats:{
    screen: ChatListScreen
  },
  ContactList:{
    screen: ContactListScreen,
  },
  Calls:{
    screen: CallsScreen,
  }
}, {
  tabBarOptions:{
    activeTintColor: '#FE4C59',
    inactiveTintColor: '#fff',
    style: {
      backgroundColor: '#2C5364'
    },
    indicatorStyle:{
      backgroundColor: '#FE4C59'
    }
  }
})

const ChatStackNavigator = createStackNavigator ({
    AppTabNavigator: {
      screen: ChatTabNavigator,
      navigationOptions: ({navigation}) => ({
        title: 'Chat' ,
        headerLeft: (
          <TouchableOpacity onPress={()=> navigation.toggleDrawer()}>
            <View style={{paddingHorizontal: 10}}>
              <Icon name="md-menu" size={24} color="#fff" />
            </View>
          </TouchableOpacity>
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
    }
  })

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});