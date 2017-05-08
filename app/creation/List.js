/**
 * Created by xutao on 2017/5/8.
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
  Image,
} from 'react-native';


export default class List extends Component {


  render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.header}>
          <Text style = {styles.headerTitle}>制作页面</Text>
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5fcff'
  },
  header: {
    paddingTop: 25,
    paddingBottom: 12,
    backgroundColor: '#ee735c'
  },
  headerTitle: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600'
  },
    item: {
    width: 100,
    marginBottom: 10,
    backgroundColor: '#fff'
  },
    thumb: {
    width: 100,
    height: 100 * 0.5,
    resizeMode: 'cover'
  },
    title: {
    padding: 10,
    fontSize: 18,
    color: '#333'
  },
    itemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#eee'
  },
    handleBox: {
    padding: 10,
    flexDirection: 'row',
    width: 100 /2 - 0.5,
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
    play: {
    position: 'absolute',
    bottom: 14,
    right: 14,
    width: 46,
    height: 46,
    paddingTop: 9,
    paddingLeft: 18,
    backgroundColor: 'transparent',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 23,
    color: '#ed7b66'
  },
    handleText: {
    paddingLeft: 12,
    fontSize: 18,
    color: '#333'
  },
    up: {
    fontSize: 22,
    color: '#333'
  },
    CommentIcon: {
    fontSize: 22,
    color: '#333'
  }


})