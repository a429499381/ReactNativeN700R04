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
  getInitialState() {
  var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(['row1', 'row 2','row 3','row 4','row 5','row 6','row 7','row 8']),
    }
  }

  render() {
  return (
    <ListView
      dataSource={this.state.dataSource}
      renderRow={(rowData) =><Text>{rowData}</Text>}
    />
  );
}
}
