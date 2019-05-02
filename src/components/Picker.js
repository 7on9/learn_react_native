import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Slider,
  TextInput
} from 'react-native'

export default class Picker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorValue: props.colorValue
    }
  }

  onChangeColor = (type, val) => {
    this.props.onChangeColor(type, val);
  }

  render() {
    return (
      <View style={style.row}>
        <Text style={style.title}>
          {this.props.title}
        </Text>
        <Slider
          step={1}
          minimumValue={0}
          maximumValue={255}
          onValueChange={
            (colorVal) => {
              this.setState({
                colorValue: colorVal
              })
              this.onChangeColor(this.props.title, colorVal)
            }
          }
          value={this.state.colorValue}
          style={{ flex: 8 }}
        />
        <TextInput 
          value={`${this.state.colorValue == undefined ? 0 : this.state.colorValue}`}
          style={style.colorValue} 
          onChange={this.changeColor}/>
      </View>
    )
  }
}

const style = StyleSheet.create({
  row: { 
    flex: 1, 
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "center" 
  },
  title: { 
    flex: 1, 
    textAlign: "center", 
    color: "black",
    fontSize: 15, 
  },
  colorValue: { 
    flex: 1, 
    textAlign: "center", 
    color: "black", 
    borderColor: "black", 
    borderWidth: 1, 
    borderRadius: 5, 
    margin: 5, 
    padding: 3 
  }
})