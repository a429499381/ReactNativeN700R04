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

let data = ['apple','pear','banana','orange','apple','pear','banana',
  'orange','apple','pear','banana','orange','apple','pear','banana','orange',
  'apple','pear','banana','orange','apple','pear','banana','orange'];

export default class List extends Component {
  constructor(){
    super();
    this.dataSource = new ListView.DataSource({
      rowHasChanged:(row1,row2) => row1 !== row2
    })
  };

  render() {
    return (
      <View>
        <ListView
          dataSource={this.dataSource.cloneWithRows(data)}
          renderRow={(rowData) =>
            <View style={{flex:1,margin:10}}>
              <Text style={{fontSize:25}}>{rowData}</Text>
            </View>}
        />
      </View>
    );
  }
}
