import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class ProScreen2 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>ProScreen2</Text>
            </View>
        );
    }
}
export default ProScreen2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});