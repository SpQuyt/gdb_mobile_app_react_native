import { DISABLE3, ENABLE3 } from '../actions/type';
import stateStorage from '../config/stateStorage';

const initialState = stateStorage.disabledColor;

export default function (state = initialState, action) {
  switch (action.type) {
    case DISABLE3:
      return stateStorage.disabledColor;

    case ENABLE3:
      return stateStorage.enabledColor;

    default:
      return state;
  }
}