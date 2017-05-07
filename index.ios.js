
import React, { Component } from 'react';
import {
  View,
  AppRegistry,
  Text,
} from 'react-native';

import NavigatorIOSApp from './NavigatorIOSApp'

export default class ReactNativeN700R04 extends React.Component {
  render() {
    return (
      <View>
        <NavigatorIOSApp/>
      </View>
    );
  }

}


AppRegistry.registerComponent('ReactNativeN700R04', ()=> ReactNativeN700R04)
