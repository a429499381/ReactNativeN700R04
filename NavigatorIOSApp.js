
import React, { Component } from 'react'

import {
  View,
  Text,
  Button,
  Alert,
  StyleSheet,
} from 'react-native'

export default class NavigatorIOSApp extends Component {
  render() {
    return (
      <View >
        <Text style = {styles.button}>


        </Text>
        <Button
          onPress={()=> {
            return (
              Alert.alert('Button')
            )
          }}
          title="Press Purple"
          color="#841584"
          accessibilityLabel="Learn more about purple"
        />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    fontSize: 30,
    padding: 100,
  }
})