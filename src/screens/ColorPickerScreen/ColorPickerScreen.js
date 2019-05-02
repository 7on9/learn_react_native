import React, { Component } from 'react'
import {
  View
} from 'react-native';
import ViewColor from '../../components/ViewColor';
import Picker from '../../components/Picker';
// import { Header, Picker, ViewColor} from '../../components/';
// import ViewColor from '../../components/viewColor/viewColor';

export default class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorR: 100,
      colorB: 150,
      colorG: 200
    }
  }
  onChangeColor = (type, val) => {
    switch (type) {
      case "R":
        this.setState({
          colorR: val
        });
        break;
        
      case "G":
        this.setState({
          colorG: val
        });
        break;
        
      case "B":
        this.setState({
          colorB: val
        });
        break;
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
          <View style={{ width: 300, height: 500 }}>
            <Picker title="R" colorValue={this.state.colorR} onChangeColor={this.onChangeColor}/>
            <Picker title="G" colorValue={this.state.colorG} onChangeColor={this.onChangeColor}/>
            <Picker title="B" colorValue={this.state.colorB} onChangeColor={this.onChangeColor}/>
            <ViewColor color={[this.state.colorR, this.state.colorG, this.state.colorB]}/>
          </View>
        </View>
        {/* <ViewColor /> */}
      </View>
    )
  }
}