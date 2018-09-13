import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet, 
    Dimensions,
    ImageBackground,
    Image,
    Card,
    ScrollView,
    TouchableOpacity,
} from "react-native";

let screenWidth = Dimensions.get('window').width
let screenHeight = Dimensions.get('window').height
import {Font} from 'expo'

import Swiper from 'react-native-swiper'

import { Container } from "native-base";

class HomeScreen extends Component {
    render() {
        return (
            <Container>
                        <ScrollView>
                    <View>
                        <Text style={{fontSize: 30, letterSpacing: 10, textAlign: 'center'}}>{'Top News'.toUpperCase()}
                        </Text>
                    </View>
            <Swiper style={styles.slider} showsButtons={true}>
                <View style={styles.slide1}>
                <TouchableOpacity>
                <Image style={styles.Image} source={require('../assets/Home1.jpg')} />
                </TouchableOpacity>
                </View>
                <View style={styles.slide2}>
                <TouchableOpacity>
                <Image style={styles.Image} source={require('../assets/Home2.png')} />
                </TouchableOpacity>
                </View>
                <View style={styles.slide3}>
                <TouchableOpacity>
                <Image style={styles.Image} source={require('../assets/Home3.jpg')} />
                </TouchableOpacity>
                </View>
            </Swiper>
                    <View>
                      <Text>

                        Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. 
                        Mauris posuere bibendum erat a volutpat. 
                          Quisque elit tellus, tempor at lacus eget, 
                          pellentesque imperdiet sem. 
                          Etiam tristique dolor a consequat egestas. 
                          Sed a posuere massa. 
                          Curabitur cursus in velit vitae accumsan. 
                          Vivamus at suscipit justo, in sagittis erat. 
                          In purus orci, ornare ac augue vel, 
                          pellentesque sodales neque. Aenean tempus nisl est, 
                          vitae molestie est laoreet at.
                          Lorem ipsum dolor sit amet, 
                          consectetur adipiscing elit. 
                          Mauris posuere bibendum erat a volutpat. 
                          Quisque elit tellus, tempor at lacus eget, 
                          pellentesque imperdiet sem. 
                          Etiam tristique dolor a consequat egestas. 
                          Sed a posuere massa. 
                          Curabitur cursus in velit vitae accumsan. 
                          Vivamus at suscipit justo, in sagittis erat. 
                          In purus orci, ornare ac augue vel, 
                          pellentesque sodales neque. Aenean tempus nisl est, 
                          vitae molestie est laoreet at.
                          Lorem ipsum dolor sit amet, 
                          consectetur adipiscing elit. 
                          Mauris posuere bibendum erat a volutpat. 
                          Quisque elit tellus, tempor at lacus eget, 
                          pellentesque imperdiet sem. 
                          Etiam tristique dolor a consequat egestas. 
                          Sed a posuere massa. 
                          Curabitur cursus in velit vitae accumsan. 
                          Vivamus at suscipit justo, in sagittis erat. 
                          In purus orci, ornare ac augue vel, 
                          pellentesque sodales neque. Aenean tempus nisl est, 
                          vitae molestie est laoreet at.
                          Lorem ipsum dolor sit amet, 
                          consectetur adipiscing elit. 
                          Mauris posuere bibendum erat a volutpat. 
                          Quisque elit tellus, tempor at lacus eget, 
                          pellentesque imperdiet sem. 
                          Etiam tristique dolor a consequat egestas. 
                          Sed a posuere massa. 
                          Curabitur cursus in velit vitae accumsan. 
                          Vivamus at suscipit justo, in sagittis erat. 
                          In purus orci, ornare ac augue vel, 
                          pellentesque sodales neque. Aenean tempus nisl est, 
                          vitae molestie est laoreet at.
                      </Text>
                    </View>
            </ScrollView>           
            </Container>
        );
    }
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 2,
        alignItems: 'center',
    },
    font: {
        fontSize: 20,
    },
    slider:{
        height: 180
    },
    Image: {
        width: screenWidth,
        height: 185
    },
    slide1: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        width: screenWidth,
        height: 10
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        color: '#000',
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'rajdhani-regular'
    }
});