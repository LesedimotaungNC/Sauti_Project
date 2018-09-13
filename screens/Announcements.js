import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,

} from "react-native";
import { Card, Content, Icon } from "native-base";

class Announcements extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
            <View>
                <TouchableOpacity>
                    <Card style={styles.card}>
                        <Image source={require('../assets/1.jpg')} style={{width: 300, height: 120, borderRadius: 10}} />
                    </Card>
                </TouchableOpacity>
                <Text style={styles.cardText}>
                    {'Promotions'.toUpperCase()}
                </Text>
            </View>
            <View>
                <TouchableOpacity>
                    <Card style={styles.card}>
                        <Image source={require('../assets/2.jpg')} style={{width: 300, height: 120, borderRadius: 10}} />
                    </Card>
                </TouchableOpacity>
                <Text style={styles.cardText}>
                    {'Resignations'.toUpperCase()}
                </Text>
            </View>
            <View>
                <TouchableOpacity>
                    <Card style={styles.card}>
                        <Image source={require('../assets/3.jpg')} style={{width: 300, height: 120, borderRadius: 10}} />
                    </Card>
                </TouchableOpacity>
                <Text style={styles.cardText}>
                    {'Awards'.toUpperCase()}
                </Text>
            </View>
            <View>
                <TouchableOpacity>
                    <Card style={styles.card}>
                        <Image source={require('../assets/4.jpg')} style={{width: 300, height: 120, borderRadius: 10}} />
                    </Card>
                </TouchableOpacity>
                <Text style={styles.cardText}>
                    {'Graduations'.toUpperCase()}
                </Text>
            </View>
            <View>
                <TouchableOpacity>
                    <Card style={styles.card}>
                        <Image source={require('../assets/4.jpg')} style={{width: 300, height: 120, borderRadius: 10}} />
                    </Card>
                </TouchableOpacity>
                <Text style={styles.cardText}>
                    {'Memorials'.toUpperCase()}
                </Text>
            </View>
            </ScrollView>
            </View>
        );
    }
}
export default Announcements;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    card: {
        borderRadius: 10,
        height: 120 ,
        width: 300 ,
        
    },
    font: {
        fontSize: 20,
        
    },
    cardText: {
        padding: 5,
        textAlign: 'center',
        letterSpacing: 10
    }
});