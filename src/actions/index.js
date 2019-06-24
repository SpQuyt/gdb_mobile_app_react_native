import {
  INCREASE, DECREASE, DISABLE2, ENABLE2, DISABLE3, ENABLE3, DISABLE4, ENABLE4, DISABLE5, ENABLE5,
  TO1STEP, TO2STEP, TO3STEP, TO4STEP, TO5STEP, TOBACKSTEP, TONEXTSTEP,
} from './type';

export const enable2 = () => ({ type: ENABLE2 });
export const disable2 = () => ({ type: DISABLE2 });
export const enable3 = () => ({ type: ENABLE3 });
export const disable3 = () => ({ type: DISABLE3 });
export const enable4 = () => ({ type: ENABLE4 });
export const disable4 = () => ({ type: DISABLE4 });
export const enable5 = () => ({ type: ENABLE5 });
export const disable5 = () => ({ type: DISABLE5 });
export const to1step = () => ({type: TO1STEP});
export const to2step = () => ({type: TO2STEP});
export const to3step = () => ({type: TO3STEP});
export const to4step = () => ({type: TO4STEP});
export const to5step = () => ({type: TO5STEP});
export const tonextstep = () => ({type: TONEXTSTEP});
export const tobackstep = () => ({type: TOBACKSTEP});