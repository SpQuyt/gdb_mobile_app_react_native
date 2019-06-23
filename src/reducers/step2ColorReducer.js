import { DISABLE2, ENABLE2 } from '../actions/type';
import stateStorage from '../config/stateStorage';

const initialState = stateStorage.disabledColor;

export default function (state = initialState, action) {
  switch (action.type) {
    case DISABLE2:
      return stateStorage.disabledColor;

    case ENABLE2:
      return stateStorage.enabledColor;

    default:
      return state;
  }
}