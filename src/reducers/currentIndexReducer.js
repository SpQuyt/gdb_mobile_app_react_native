import { TO1STEP, TO2STEP, TO3STEP, TO4STEP, TO5STEP, TOBACKSTEP, TONEXTSTEP } from '../actions/type';

const initialState = 1;

export default function (state = initialState, action) {
  switch (action.type) {
    case TO1STEP:
      return 1;

    case TO2STEP:
      return 2;

    case TO3STEP:
      return 3;

    case TO4STEP:
      return 4;

    case TO5STEP:
      return 5;

    case TONEXTSTEP:
      return state + 1;

    case TOBACKSTEP:
      return state - 1;

    default:
      return state;
  }
}