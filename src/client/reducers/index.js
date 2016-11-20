import { combineReducers } from 'redux-immutable';
import products from './products';

const rootReducer = combineReducers({
  products,
});

export default rootReducer;
