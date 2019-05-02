import { Dimensions, Platform, StatusBar } from 'react-native';

export const Size = {
    WIDTH_SCREEN: Dimensions.get('screen').width,
    HEIGHT_SCREEN: Dimensions.get('window').height,
    STATUSBAR_HEIGHT: Platform.select({ ios: 20, android: StatusBar.currentHeight }),
    APPBAR_HEIGHT: Platform.select({ ios: 44, android: 56 }),
}