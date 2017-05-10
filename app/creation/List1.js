import React, { Component } from 'react'
import {
  AppRegistry,
  View,
  Text,
  ListView,
  Image,
  ActivityIndicator,
  StyleSheet
} from 'react-native'

const REQUEST_URL = 'https://api.douban.com/v2/movie/top250';


export default class List1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }),
      loaden: false,
    }
    this.fetchData()
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then(res => res.json())
      .then(responseData => {
        console.log(responseData)
        console.log(responseData)
        this.setState({
          movies:this.state.movies.cloneWithRows(responseData.subjects),
          loaden: true
        })
      })
      .done(
        console.log("err")
      )
  }

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
    if (!this.state.loaden) {
      <View>
        <ActivityIndicator
          size = {28}

        />
      </View>
    }

    return (
      <View>
        <ListView
          dataSource={this.state.movies}
          renderRow ={
            this.renderMovieList.bind(this)
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