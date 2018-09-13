import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class ProScreen1 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>ProScreen1</Text>
            </View>
        );
    }
}
export default ProScreen1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});