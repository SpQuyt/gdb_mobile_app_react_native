import { INCREASE, DECREASE, DISABLE2, ENABLE2, DISABLE3, ENABLE3, DISABLE4, ENABLE4, DISABLE5, ENABLE5 } from './type';

export const counterIncrease = () => ({ type: INCREASE });
export const counterDecrease = () => ({ type: DECREASE });
export const enable2 = () => ({ type: ENABLE2 });
export const disable2 = () => ({ type: DISABLE2 });
export const enable3 = () => ({ type: ENABLE3 });
export const disable3 = () => ({ type: DISABLE3 });
export const enable4 = () => ({ type: ENABLE4 });
export const disable4 = () => ({ type: DISABLE4 });
export const enable5 = () => ({ type: ENABLE5 });
export const disable5 = () => ({ type: DISABLE5 });