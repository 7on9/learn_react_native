/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StatusBar, Text, View } from 'react-native';
import ColorPicker from './src/screens/ColorPickerScreen/ColorPickerScreen';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from "react-navigation";
import Login from './src/screens/LoginScreen/LoginScreen';

const RootStack = createSwitchNavigator(
  {
    Login: Login,
    ColorPicker: ColorPicker,
  },
  {
    initialRouteName: 'Login',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return (
      
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" translucent={true} hidden={false} backgroundColor={'transparent'} />
        <AppContainer />
        {/* <ColorPicker /> */}
      </View>
    );
  }
}
