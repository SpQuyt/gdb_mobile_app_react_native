import {combineReducers} from 'redux';
import currentIndexReducer from './currentIndexReducer';
import step1ColorReducer from './step1ColorReducer';
import step2ColorReducer from './step2ColorReducer';
import step3ColorReducer from './step3ColorReducer';
import step4ColorReducer from './step4ColorReducer';
import step5ColorReducer from './step5ColorReducer';

export default combineReducers({
  currentIndex: currentIndexReducer,
  step1color:step1ColorReducer,
  step2color:step2ColorReducer,
  step3color:step3ColorReducer,
  step4color:step4ColorReducer,
  step5color:step5ColorReducer,
});