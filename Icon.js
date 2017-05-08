import React, { Component } from 'react';
import {
  Text,
  View,
  TabBarIOS
} from 'react-native';

import  Icon from 'react-native-vector-icons/Ionicons'

export default class ReactNativeN700R04 extends Component {
  render() {
    return (
      <TabBarIOS>
        <Icon.TabBarItem
          title="Home"
          iconName="ios-home-outline"
          selectedIconName="ios-home"
        >
          <View ><Text>Home Tab</Text></View>
        </Icon.TabBarItem>
      </TabBarIOS>
    )
  }
}

AppRegistry.registerComponent('ReactNativeN700R04', () => ReactNativeN700R04);

// 完整Icon 图标导航小案例

