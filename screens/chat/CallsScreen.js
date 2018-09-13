import React, { Component } from "react";
import { 
    View,
    StyleSheet,
    TouchableOpacity
} from "react-native";

import {Font} from 'expo' //Fonts import

import {Container, Icon, List, Switch, Content, ListItem, Left, Text, Body, Right, Button, Thumbnail, Row} from 'native-base';


class CallsScreen extends Component {

    state = {
        fontLoaded: false,
    };
    async componentDidMount() {
        await Font.loadAsync({
            'Roboto_medium': require('../../assets/Roboto-Medium.ttf'),
        }),
        // Settins the state to true when font is loaded
        this.setState({ fontLoaded: true});
    }
    render() {
        return (
            <Container>
            {
                this.state.fontLoaded ? (
            <Content>
                <List>
                    <ListItem avatar>
                        <Left>
                        <TouchableOpacity>
                            <Thumbnail source={require('../../assets/item-4.jpg')}/>
                        </TouchableOpacity>
                        <Icon name="arrow-round-down" style={{flexDirection: 'row'}} />
                        </Left>

                        <Body>
                            <Text>Chico Mendes</Text>
                            <Text note numberOfLines={2}> {`Incoming Call...\n6 minutes`}
                              </Text>
                        </Body>
                        <Right>
                            <TouchableOpacity>
                                <Icon name="call"/>
                            </TouchableOpacity>
                        </Right>
                    </ListItem>
                    <ListItem avatar>
                        <Left>
                        <TouchableOpacity>
                            <Thumbnail source={require('../../assets/item-7.png')}/>
                        </TouchableOpacity>
                        <Icon name="arrow-round-down" style={{flexDirection: 'row'}} />
                        </Left>

                        <Body>
                            <Text>Tsepang Ragwale</Text>
                            <Text note numberOfLines={2}> {`Incoming Video Call...\n29 minutes`}
                              </Text>
                        </Body>
                        <Right>
                            <TouchableOpacity>
                                <Icon name="videocam"/>
                            </TouchableOpacity>
                        </Right>
                    </ListItem>
                    <ListItem avatar>
                        <Left>
                        <TouchableOpacity>
                            <Thumbnail source={require('../../assets/item-8.jpg')}/>
                        </TouchableOpacity>
                        <Icon name="arrow-round-up" style={{flexDirection: 'row'}} />
                        </Left>

                        <Body>
                            <Text>Palesa Modise</Text>
                            <Text note numberOfLines={2}> {`Outgoing Video Call...\n7 minutes`}
                              </Text>
                        </Body>
                        <Right>
                            <TouchableOpacity>
                                <Icon name="videocam"/>
                            </TouchableOpacity>
                        </Right>
                    </ListItem>
                    <ListItem avatar>
                        <Left>
                        <TouchableOpacity>
                            <Thumbnail source={require('../../assets/item-9.png')}/>
                        </TouchableOpacity>
                        <Icon name="arrow-round-down" style={{flexDirection: 'row'}} />
                        </Left>

                        <Body>
                            <Text>Tshego Dlamini</Text>
                            <Text note numberOfLines={2}> {`Incoming Call...\n2 minutes`}
                              </Text>
                        </Body>
                        <Right>
                            <TouchableOpacity>
                                <Icon name="call"/>
                            </TouchableOpacity>
                        </Right>
                    </ListItem>              
                </List>
            </Content>
                ) : null
            }
            </Container>
        );
    }
}
export default CallsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});