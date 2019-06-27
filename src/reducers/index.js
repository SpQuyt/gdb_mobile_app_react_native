import {combineReducers} from 'redux';
import currentIndexReducer from './currentIndexReducer';
import stepsColorReducer from './stepsColorReducer'

export default combineReducers({
  currentIndex: currentIndexReducer,
  stepsColor: stepsColorReducer,
});