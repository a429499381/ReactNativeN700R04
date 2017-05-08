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

  render() {
    return (
      <TabBarIOS>
        <Icon.TabBarItem
          title = 'Home'
          iconName="ios-home-outline"
          selectedIconName="ios-home"
          selected = {this.state.selectedTab === 'redTab'}
          onPress = {
            ()=> {
              this.setState({
                selectedTab: 'redTab',
              })
            }
          }
        >
          <View ><Text>Home Tab</Text></View>
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="Home"
          iconName="ios-home-outline"
          selectedIconName="ios-home"
          selected = {this.state.selectedTab === 'greenTab'}
          onPress = {()=> {
              this.setState({
                selectedTab: 'greenTab'
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
