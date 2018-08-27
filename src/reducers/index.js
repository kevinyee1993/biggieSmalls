import { combineReducers } from 'redux';
import SelectedBoxReducer from './selected_box_reducer';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  SelectedBox: SelectedBoxReducer
});

export default rootReducer;
