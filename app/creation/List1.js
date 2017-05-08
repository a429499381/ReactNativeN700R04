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
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    return {
      dataSource: ds.cloneWithRows([
        {
          "_id":"420000199307274815","thumb":"http://dummyimage.com/1200x600/524b67)","viedeo":"xutao"
        }
        ,
        {
          "_id":"130000200401272468","thumb":"http://dummyimage.com/1200x600/09e551)","viedeo":"xutao"
        }
        ,
        {
          "_id":"500000198011265288","thumb":"http://dummyimage.com/1200x600/10f546)","viedeo":"xutao"
        }
        ,
        {
          "_id":"710000197501103227","thumb":"http://dummyimage.com/1200x600/2f5446)","viedeo":"xutao"
        }
        ,
        {
          "_id":"370000199508142064","thumb":"http://dummyimage.com/1200x600/6d0f53)","viedeo":"xutao"
        }
      ])
    }
  }

  renderRow(row) {
      return (
        <TouchableHighlight>
          <View style = {styles.item}>
            <Text style = {styles.title}>{row._id}</Text>
            <Image
              source = {{uri: row.thumb}}
              style = {styles.thumb}
              />
              <Icon
                name = 'ios-play'
                size = {28}
                style = {styles.play}
              />
              <View sytle = {styles.itemFooter}>
                <View style = {styles.handleBox}>
                  <Icon
                    name = 'ios-heart-outline'
                    size = {28}
                    style = {styles.up}
                  />
                  <Text style = {styles.handleText}>喜欢</Text>
                </View>
                <View style = {styles.handleBox}>
                  <Icon
                    name = 'ios-chatbubble-outline'
                    size = {28}
                    style = {styles.commentIcon}
                  />
                  <Text style = {styles.handleText}>评论</Text>
                </View>
              </View>
          </View>
        </TouchableHighlight>
      )
  }

  render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.header}>
          <Text style = {styles.headerTitle}>制作页面</Text>
        </View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          enableEmptySections= {true}
        />
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