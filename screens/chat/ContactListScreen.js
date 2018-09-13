import React, { Component } from 'react';

import {StyleSheet} from 'react-native'

import {Font} from 'expo'
import { Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Container, Icon } from 'native-base';


export default class ContactListScreen extends Component {

  static navigationOptions = {
    title: 'Contact List'
};
  state = {
    fontLoaded: false,
};
async componentDidMount() {
    await Font.loadAsync({
        'rajdhani-regular': require('../../assets/rajdhani-regular.ttf'),
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
            <ListItem thumbnail>
              <Left>
                <Thumbnail source={require('../../assets/item-7.png')} />
              </Left>
              <Body>
                <Text style={{fontWeight: "800"}}>Tshepang Ragwale</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Icon name="md-arrow-forward" color="#fff"/>
                </Button>
              </Right>
            </ListItem>
          </List>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail source={require('../../assets/item-9.png')} />
              </Left>
              <Body>
                <Text style={{fontWeight: "800"}}>Tshego Dlamini</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Icon name="md-arrow-forward" color="#fff"/>
                </Button>
              </Right>
            </ListItem>
          </List>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail source={require('../../assets/item-2.jpg')} />
              </Left>
              <Body>
                <Text style={{fontWeight: "800"}}>Ahmed Khuthrapali</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Icon name="md-arrow-forward" color="#fff"/>
                </Button>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});