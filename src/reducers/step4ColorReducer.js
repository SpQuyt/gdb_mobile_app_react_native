import { DISABLE4, ENABLE4 } from '../actions/type';
import stateStorage from '../config/stateStorage';

const initialState = stateStorage.disabledColor;

export default function (state = initialState, action) {
  switch (action.type) {
    case DISABLE4:
      return stateStorage.disabledColor;

    case ENABLE4:
      return stateStorage.enabledColor;

    default:
      return state;
  }
}