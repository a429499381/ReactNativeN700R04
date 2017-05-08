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
import Edit from './app/edit/Edit'
import List from './app/creation/List'
import Account from './app/account/Account'

export default class ReactNativeN700R04 extends Component {
  state = {
    selectedTab: 'Account'
  }
  render() {
    return (
      <TabBarIOS tintColor= '#ee735c'>
        <Icon.TabBarItem
          title = 'Home'  // 图标下的文字
          iconName='ios-videocam-outline'  // 没有选中的时候图标
          selectedIconName= 'ios-videocam' // 选中的是很好图标
          selected = {this.state.selectedTab === 'Edit'} // 切换的方法
          onPress = {
            ()=> {
              this.setState({
                selectedTab: 'Edit',
              })
            }
          }
        >
          <Edit/>
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="Home2"
          iconName="ios-recording-outline"
          selectedIconName="ios-recording"
          selected = {this.state.selectedTab === 'List'}
          onPress = {()=> {
              this.setState({
                selectedTab: 'List'
              })
            }
          }
        >
          <List />
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="更多"
          iconName="ios-more-outline"
          selectedIconName="ios-more"
          selected = {this.state.selectedTab === 'Account'}
          onPress = {()=> {
            this.setState({
              selectedTab: 'Account'
            })
          }
          }
        >
          <Account />
        </Icon.TabBarItem>
      </TabBarIOS>
    )
  }
}



AppRegistry.registerComponent('ReactNativeN700R04', () => ReactNativeN700R04);
