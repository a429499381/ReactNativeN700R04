import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  Alert,
} from 'react-native';

import  Icon from 'react-native-vector-icons/Ionicons'

export default class ReactNativeN700R04 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'Home'
    }

  }
  render() {
    return (
      <TabBarIOS>
        <Icon.TabBarItem
          title="Home"
          iconName="ios-home-outline"
          selectedIconName="ios-home"
          selected = {this.state.selectedTab === 'Home'}
          onPress = {
            ()=> {
              this.setState({
                selectedTab: 'Home',
              })
              Alert.alert('Home')
            }
          }
        >
          <View ><Text>Home Tab</Text></View>
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="Home"
          iconName="ios-home-outline"
          selectedIconName="ios-home"
          selected = {this.state.selectedTab === 'ios-Home'}
          onPress = {
            ()=> {
              this.setState({
                selectedTab: 'ios-home'
              })
            }
          }
        >
          <View ><Text>Home2</Text></View>
        </Icon.TabBarItem>
      </TabBarIOS>
    )
  }
}



AppRegistry.registerComponent('ReactNativeN700R04', () => ReactNativeN700R04);
