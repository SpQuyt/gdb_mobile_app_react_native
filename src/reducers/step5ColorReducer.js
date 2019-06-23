import { DISABLE5, ENABLE5 } from '../actions/type';
import stateStorage from '../config/stateStorage';

const initialState = stateStorage.disabledColor;

export default function (state = initialState, action) {
  switch (action.type) {
    case DISABLE5:
      return stateStorage.disabledColor;

    case ENABLE5:
      return stateStorage.enabledColor;

    default:
      return state;
  }
}