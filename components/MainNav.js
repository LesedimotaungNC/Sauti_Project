import React, { Component } from "react";
import { 
    View,
    StyleSheet,
    SafeAreaView,
    Image,
    ScrollView,
    TouchableOpacity,
    
} from "react-native";

import Icon from 'react-native-vector-icons/Ionicons'

import {createSwitchNavigator, createStackNavigator, createDrawerNavigator, DrawerItems, createMaterialTopTabNavigator} from 'react-navigation'

// improt screens
import AuthLoadingScreen from '../screens/AuthLoadingScreen'
import WelcomeScreen from '../screens/WelcomeScreen'
import SignInScreen from '../screens/SignInScreen'
import SignUpScreen from '../screens/SignUpScreen'
import SettingsScreen from '../screens/SettingsScreen'
import Announcements from '../screens/Announcements'
import HomeScreen from '../screens/HomeScreen'
import ProfileStackNav from '../screens/Profile/ProfileScreen'
// Chat Screens
import ChatListScreen from '../screens/chat/ChatListScreen'
import ContactListScreen from '../screens/chat/ContactListScreen'
import CallsScreen from '../screens/chat/CallsScreen'

const AuthStackNavigator = createStackNavigator ({
  Welcome: WelcomeScreen,
  SignIn: SignInScreen,
  SignUp: SignUpScreen
})

const AppTabNavigator = createMaterialTopTabNavigator({
  Home:{
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: ({tintColor }) => (
        <Icon name="ios-home" size={24} color={tintColor} / >
      )
    }
  },
  Announcements:{
    screen: Announcements,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-megaphone" size={24} color={tintColor}/>
      )
    }
  },
}, {
  tabBarOptions:{
    activeTintColor: '#FE4C59',
    inactiveTintColor: '#fff',
    showLabel: false,
    style: {
      backgroundColor: '#2C5364'
    }, 
    indicatorStyle:{
      backgroundColor: '#FE4C59'
    },
    showIcon: true
  }
})
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

const AppStackNavigator = createStackNavigator ({
  AppTabNavigator: {
    screen: AppTabNavigator,
    navigationOptions: ({navigation}) => ({
      title: "Home",
      headerLeft: (
        <TouchableOpacity onPress={()=> navigation.toggleDrawer()}>
          <View style={{paddingHorizontal: 10}}>
            <Icon name="ios-menu" size={24} color="#fff" />
          </View>
        </TouchableOpacity>
      ),
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate('ChatListScreen')}>
          <View style={{paddingHorizontal: 10}}>
            <Icon name="ios-chatbubbles" size={24} color="#fff"/>
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
const ChatStackNavigator = createStackNavigator ({
  AppTabNavigator: {
    screen: ChatTabNavigator,
    navigationOptions: ({navigation}) => ({
      title: 'Chat' ,
      headerLeft: (
        <TouchableOpacity onPress={()=> navigation.toggleDrawer()}>
          <View style={{paddingHorizontal: 10}}>
            <Icon name="ios-menu" size={24} color="#fff" />
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
// Drawer
const CustomDrawerComponent = (props) => (
  <SafeAreaView style = {{ flex: 1 }}>
      <View style={{height: 150, backgroundColor: '#2C5364', paddingTop: 20}}>
          <Image style={styles.logoImage} 
          source={require('../assets/logo1.png')}
          />
      </View>
      <ScrollView>
          <DrawerItems {...props} />
      </ScrollView>
  </SafeAreaView>
)
const AppDrawerNavigator = createDrawerNavigator({
  Home: {
    screen:AppStackNavigator
  },
  Profile: {
    screen: ProfileStackNav
  },
  Chat:{
    screen: ChatStackNavigator
  } ,
  Settings: SettingsScreen,
},{
  contentComponent: CustomDrawerComponent,
  contentOptions: {
    activeTintColor: '#FE4C59'
  }
})

// switch
export default createSwitchNavigator ({
  AuthLoading: AuthLoadingScreen,
  Auth: AuthStackNavigator,
  AppStack: AppDrawerNavigator,
})

const styles = StyleSheet.create({
  container: {
    flex: 1,    
  },
  logoImage: {
    marginLeft: 75,
    height: 120,
    width: 120,
  }
});