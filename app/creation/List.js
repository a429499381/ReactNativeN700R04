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
  Dimensions,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

var width = Dimensions.get('window').width

var data = {
    "_id":"630000201408286582","thumb":"http://dummyimage.com/1200x600/bdade8)","viedeo":"xutao"
  }



export default class List extends Component {
  constructor(props) {
    super(props)
    var ds = new ListView.DataSource({
      rowHasChanged:(r1, r2) => r1 !== r2,
    })
    this.state = {
      dataSource: ds,
      data: ['h', 'e', 'l', 'l', '0']
    }
  }

  _renderRow(rowData, rowId) {
    return (
      <Text>{rowData + ' ' + rowId}</Text>
    )
  }

  render() {
    return (
      <View>
        <ListView
          dataSource={this.state.dataSource.cloneWithRows(this.state.data)}
          renderRow={(rowData,sectionId,rowId) => this._renderRow(rowData, rowId)}
          showsVerticalScrollIndicator = {false}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5fcff'
  },
  header: {
    paddingTop: 25,
    paddingBottom: 12,
    backgroundColor: '#ee735c',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600'
  },

 item: {

 },
 title: {

 },
 thumb: {

 },
 play: {

 },
 itemFooter: {

 },
 handleBox: {

 },
 up: {

 },
 handleText: {

 },
 handleBox: {

 },
 handleText: {

 },
})