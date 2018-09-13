import React, { Component } from "react";
import { 
    View,
    TouchableOpacity
} from "react-native";

import Icon from 'react-native-vector-icons/Ionicons'

const MenuButton = ({navigation}) => (
    <TouchableOpacity onPress={()=> {navigation.toggleDrawer()}}>
    <View style={{paddingHorizontal: 10}}>
        <Icon name="ios-menu" size={24} color="#fff"/>
    </View>
    </TouchableOpacity>
)
export default MenuButton;

