import {
  Dimensions,
} from 'react-native';

export default class stateStorage {
  static enabledColor = 'brown';
  static disabledColor = 'grey';
  static appColor = '#08d6cc';
  static backgroundColor = '#fbfbfb';
  static SCREEN_WIDTH = Dimensions.get('screen').width;
  static SCREEN_HEIGHT = Dimensions.get('screen').height;
  static fontsize = 15;
}