import React, { Component } from "react";
import { 
  View,
  Text,
  StyleSheet
} from "react-native";

import MainNav from './components/MainNav'

class App extends Component {
  render() {
    return (
        <MainNav />
    );
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
