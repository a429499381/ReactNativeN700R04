import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  ListView,
  View,
} from 'react-native'

let data = [
  'apple',
  'pear',
  '002',
  '003',
  '005',
]

export default class ReactNativeN700R04 extends Component {
 constructor() {
   super()
   this.dataSource = new ListView.DataSource({
     rowHasChanged: (row1, row2) => row1 !== row2
   })
 }

 render() {
  return (
    <View>
      <ListView
        dataSource={this.dataSource.cloneWithRows(data)}
        renderRow={(rowData) =>
          <View>
            <Text>{rowData}</Text>
          </View>
        }
      />
    </View>
  )
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
})

AppRegistry.registerComponent('ReactNativeN700R04', ()=> ReactNativeN700R04)