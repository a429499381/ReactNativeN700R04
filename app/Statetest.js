/**
 * Created by xutao on 2017/5/2.
 */
import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class Statetest extends Component {
  constructor(props) {
    super(props)
    this.state = {
      size: 80,
    }
  }
  render()
  {
      return (
        <View>
          <Text style="{{fontSize:20,backgroundColor:'red'}}"
            onPress = {()=>{
              this.setState({
                size: this.state.size +10
              })
            }}
          >我吹啊， 吹 {this.state.size}</Text>
        </View>
      )
  }
}
