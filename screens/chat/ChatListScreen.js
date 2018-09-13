import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";

import {Content, List, Left, Body, Right, ListItem, Thumbnail} from 'native-base'
class ChatListScreen extends Component {

    static navigationOptions = {
        title: 'Chats'
    };
    
    render() {
        return (
            <Content style={styles.container}>
                        <List>
                            <ListItem avatar>
                                <Left>
                                    <TouchableOpacity>
                                    <Thumbnail source={require('../../assets/item-7.png')} />
                                    </TouchableOpacity>
                                </Left>
                                <Body>
                                    <TouchableOpacity onPress={() => this.navigation.navigate('')}>
                                        <Text style={{fontWeight: "800"}}>Tsepang Ragwale</Text>
                                        <Text note>Doing what you like will always keep you happy . .</Text>
                                    </TouchableOpacity>
                                </Body>
                                <Right>
                                    <TouchableOpacity>
                                        <Text note>1:24 am</Text>
                                    </TouchableOpacity>
                                </Right>
                            </ListItem>
                        </List>
                        <List>
                            <ListItem avatar>
                                <Left>
                                    <TouchableOpacity>
                                    <Thumbnail source={require('../../assets/item-4.jpg')} />
                                    </TouchableOpacity>
                                </Left>
                                <Body>
                                    <TouchableOpacity onPress={() => this.navigation.navigate('')}>
                                        <Text style={{fontWeight: "800"}}>Chico Mendes</Text>
                                        <Text note>Doing what you like will always keep you happy . .</Text>
                                    </TouchableOpacity>
                                </Body>
                                <Right>
                                    <TouchableOpacity>
                                        <Text note>13:17 pm</Text>
                                    </TouchableOpacity>
                                </Right>
                            </ListItem>
                        </List>
                        <List>
                            <ListItem avatar>
                                <Left>
                                    <TouchableOpacity>
                                    <Thumbnail source={require('../../assets/item-9.png')} />
                                    </TouchableOpacity>
                                </Left>
                                <Body>
                                    <TouchableOpacity onPress={() => this.navigation.navigate('')}>
                                        <Text style={{fontWeight: "800"}}>Tshego Dlamini</Text>
                                        <Text note>Doing what you like will always keep you happy . .</Text>
                                    </TouchableOpacity>
                                </Body>
                                <Right>
                                    <TouchableOpacity>
                                        <Text note>3:43 pm</Text>
                                    </TouchableOpacity>
                                </Right>
                            </ListItem>
                        </List>
                        <List>
                            <ListItem avatar>
                                <Left>
                                    <TouchableOpacity>
                                    <Thumbnail source={require('../../assets/item-2.jpg')} />
                                    </TouchableOpacity>
                                </Left>
                                <Body>
                                    <TouchableOpacity onPress={() => this.navigation.navigate('')}>
                                        <Text style={{fontWeight: "800"}}>Ahmed Khuthrapali</Text>
                                        <Text note>Doing what you like will always keep you happy . .</Text>
                                    </TouchableOpacity>
                                </Body>
                                <Right>
                                    <TouchableOpacity>
                                        <Text note>3:43 pm</Text>
                                    </TouchableOpacity>
                                </Right>
                            </ListItem>
                        </List>
                        <List>
                            <ListItem avatar>
                                <Left>
                                    <TouchableOpacity>
                                    <Thumbnail source={require('../../assets/item-5.jpg')} />
                                    </TouchableOpacity>
                                </Left>
                                <Body>
                                    <TouchableOpacity onPress={() => this.navigation.navigate('')}>
                                        <Text style={{fontWeight: "800"}}>Jabulai Phakade</Text>
                                        <Text note>Doing what you like will always keep you happy . .</Text>
                                    </TouchableOpacity>
                                </Body>
                                <Right>
                                    <TouchableOpacity>
                                        <Text note>3:43 pm</Text>
                                    </TouchableOpacity>
                                </Right>
                            </ListItem>
                        </List>
                        <List>
                            <ListItem avatar>
                                <Left>
                                    <TouchableOpacity>
                                    <Thumbnail source={require('../../assets/item-8.jpg')} />
                                    </TouchableOpacity>
                                </Left>
                                <Body>
                                    <TouchableOpacity onPress={() => this.navigation.navigate('')}>
                                        <Text style={{fontWeight: "800"}}>Palesa Modise</Text>
                                        <Text note>Doing what you like will always keep you happy . .</Text>
                                    </TouchableOpacity>
                                </Body>
                                <Right>
                                    <TouchableOpacity>
                                        <Text note>3:43 pm</Text>
                                    </TouchableOpacity>
                                </Right>
                            </ListItem>
                        </List>
                        <List>
                            <ListItem avatar>
                                <Left>
                                    <TouchableOpacity>
                                    <Thumbnail source={require('../../assets/item-3.jpg')} />
                                    </TouchableOpacity>
                                </Left>
                                <Body>
                                    <TouchableOpacity onPress={() => this.navigation.navigate('')}>
                                        <Text style={{fontWeight: "800"}}>Themba Buso</Text>
                                        <Text note>Doing what you like will always keep you happy . .</Text>
                                    </TouchableOpacity>
                                </Body>
                                <Right>
                                    <TouchableOpacity>
                                        <Text note>3:43 pm</Text>
                                    </TouchableOpacity>
                                </Right>
                            </ListItem>
                        </List>
                        <List>
                            <ListItem avatar>
                                <Left>
                                    <TouchableOpacity>
                                    <Thumbnail source={require('../../assets/item-6.jpg')} />
                                    </TouchableOpacity>
                                </Left>
                                <Body>
                                    <TouchableOpacity onPress={() => this.navigation.navigate('')}>
                                        <Text style={{fontWeight: "800"}}> Sfiso Buthelezi</Text>
                                        <Text note>Doing what you like will always keep you happy . .</Text>
                                    </TouchableOpacity>
                                </Body>
                                <Right>
                                    <TouchableOpacity>
                                        <Text note>3:43 pm</Text>
                                    </TouchableOpacity>
                                </Right>
                            </ListItem>
                        </List>
                        </Content>
        );
    }
}
export default ChatListScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
});