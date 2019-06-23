import { DISABLE1, ENABLE1 } from '../actions/type';
import stateStorage from '../config/stateStorage';

const initialState = stateStorage.enabledColor;

export default function (state = initialState, action) {
  switch (action.type) {
    case DISABLE1:
      return stateStorage.disabledColor;

    case ENABLE1:
      return stateStorage.enabledColor;

    default:
      return state;
  }
}