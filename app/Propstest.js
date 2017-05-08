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


export default class Propstest extends Component {
  static defaultProps = {
    name : "小红"
  }
  static propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    sex: PropTypes.string.isRequired,
  }
  render()
  {
      return (
        <View>
          <Text style="{{fontSize:20,backgroundColor:'red'}}">姓名子组件.{this.props.name}</Text>
          <Text style="{{fontSize:20,backgroundColor:'red'}}">年龄子组件.{this.props.age}</Text>
          <Text style="{{fontSize:20,backgroundColor:'red'}}">性别子组件.{this.props.sex}</Text>
        </View>
      )
  }
}
