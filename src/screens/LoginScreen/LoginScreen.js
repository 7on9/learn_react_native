import React, { Component } from 'react'
import {
  Text,
  StyleSheet,
  View,
  TouchableHighlight
} from 'react-native'
import { PublicStyle } from '../../common/style';

export default class Login extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <View style={PublicStyle.container.center}>
        <TouchableHighlight onPress={() => this.props.navigation.navigate('ColorPicker')} underlayColor="white">
          <View style={PublicStyle.button}>
            <Text style={PublicStyle.buttonText}>Go to color picker</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
