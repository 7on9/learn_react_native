import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class ViewColor extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={{ backgroundColor: `rgb(${this.props.color[0]}, ${this.props.color[1]}, ${this.props.color[2]})`, flex: 3 }}>

      </View>
    )
  }
}