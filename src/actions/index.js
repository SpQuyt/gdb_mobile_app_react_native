import {
  DISABLE2, ENABLE2, ENABLE3, ENABLE4, ENABLE5,
  TO1STEP, TO2STEP, TO3STEP, TO4STEP, TO5STEP, TOBACKSTEP, TONEXTSTEP, ENABLE1,
} from './type';
export const enable1 = () => ({ type: ENABLE1 });
export const enable2 = () => ({ type: ENABLE2 });
export const enable3 = () => ({ type: ENABLE3 });
export const enable4 = () => ({ type: ENABLE4 });
export const enable5 = () => ({ type: ENABLE5 });
export const to1step = () => ({ type: TO1STEP });
export const to2step = () => ({ type: TO2STEP });
export const to3step = () => ({ type: TO3STEP });
export const to4step = () => ({ type: TO4STEP });
export const to5step = () => ({ type: TO5STEP });
export const tonextstep = () => ({ type: TONEXTSTEP });
export const tobackstep = () => ({ type: TOBACKSTEP });