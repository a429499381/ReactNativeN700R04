import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ListView,
  View
} from 'react-native';
// ListView 视图 能正常运行案例

let data = ['apple','pear','banana','orange','apple','pear','banana',
  'orange','apple','pear','banana','orange','apple','pear','banana','orange',
  'apple','pear','banana','orange','apple','pear','banana','orange'];

class ReactNativeN700R04 extends Component {
  constructor(){
    super();
    this.dataSource = new ListView.DataSource({
      rowHasChanged:(row1,row2) => row1 !== row2
    })
  };

  render() {
    return (
      <View style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('ReactNativeN700R04', () => ReactNativeN700R04);import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ListView,
  View
} from 'react-native';
// ListView 视图 能正常运行案例

let data = ['apple','pear','banana','orange','apple','pear','banana',
  'orange','apple','pear','banana','orange','apple','pear','banana','orange',
  'apple','pear','banana','orange','apple','pear','banana','orange'];

class ReactNativeN700R04 extends Component {
  constructor(){
    super();
    this.dataSource = new ListView.DataSource({
      rowHasChanged:(row1,row2) => row1 !== row2
    })
  };

  render() {
    return (
      <View style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('ReactNativeN700R04', () => ReactNativeN700R04);