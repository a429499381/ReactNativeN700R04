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
import Statetest from "./app/Statetest";

export default class ReactNativeN700R04 extends Component {
  state = {
    selectedTab: 'redTab'
  }
  render() {
    return (
      <TabBarIOS>
        <Icon.TabBarItem
          title = 'Home'  // 图标下的文字
          iconName="ios-home-outline"  // 没有选中的时候图标
          selectedIconName="ios-home" // 选中的是很好图标
          selected = {this.state.selectedTab === 'Edit'} // 切换的方法
          onPress = {
            ()=> {
              this.setState({
                selectedTab: 'Edit',
              })
            }
          }
        >
          <Statetest/>
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="Home2"
          iconName="ios-home-outline"
          selectedIconName="ios-home"
          selected = {this.state.selectedTab === 'List'}
          onPress = {()=> {
              this.setState({
                selectedTab: 'List'
              })
            }
          }
        >
          <Statetest/>
        </Icon.TabBarItem>

      </TabBarIOS>
    )
  }
}



AppRegistry.registerComponent('ReactNativeN700R04', () => ReactNativeN700R04);
