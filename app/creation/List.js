/**
 * Created by xutao on 2017/5/8.
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ListView,
  Image,
  ActivityIndicator,
  View
} from 'react-native';

import Mock from 'mockjs'
const REQUEST_URL = 'https://api.douban.com/v2/movie/top250';
const data = {"success":true,"data|10":[{"_id":"@ID","thumb":"@IMG(1200x600,@color())","viedeo":"xutao","title":"\u6d4b\u8bd5\u5185\u5bb98ekr"}]}

export default class MovieList extends Component {
  constructor(){
    super();
    this.state = {
      movies:new ListView.DataSource({
        rowHasChanged:(row1,row2) => row1 !== row2
      }),
      loaded:true
    }
    var data = Mock.mock(data)
    console.log(data)
    this.setState = {
      movies: data,
    }
  };

  fetchData(){
    fetch(REQUEST_URL)
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData);
        this.setState({
          movies:this.state.movies.cloneWithRows(responseData.subjects),
          loaded:true
        })
      })
      .done();
  };

  renderMovieList(movie){
    return(
      <View style={styles.item}>
          <Text style={styles.itemHeader}>
            {movie.title}
          </Text>
      </View>
    );
  }

  render() {
    if (!this.state.loaded) {
      return(
        <View style={styles.container}>
          <View style={styles.loading}>
            <ActivityIndicator
              size='large'
              color='#eabb33'/>
          </View>
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.movies}
          renderRow={
            this.renderMovieList.bind(this)
          }
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
  item:{
    flexDirection:'row',
    borderBottomWidth:1,
    borderColor:'rgba(100,53,201,0.1)',
    paddingBottom:6,
    paddingTop:6,
    flex:1,
  },
  itemText:{
    fontSize:16,
    fontFamily:'Helvetica Neue',
    fontWeight:'400',
    color:'rgba(0,0,0,0.8)',
    lineHeight:26,
  },
  image:{
    height:138,
    width:99,
    margin:6,
  },
  itemHeader:{
    fontSize:18,
    fontFamily:'Helvetica Neue',
    fontWeight:'300',
    color:'#6435c9',
    marginBottom:6,
  },
  itemContent:{
    flex:1,
    marginLeft:13,
    marginTop:6,
  },
  itemMeta:{
    fontSize:16,
    color:'rgba(0,0,0,0.6)',
    marginBottom:6,
  },
  redText:{
    color:'#db2828',
    fontSize:15,
  },
  loading:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
});

