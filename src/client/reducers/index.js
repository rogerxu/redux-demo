import { combineReducers } from 'redux-immutable';
import todos from './todos';

const reducer = combineReducers({
  todos,
});

export default reducer;
