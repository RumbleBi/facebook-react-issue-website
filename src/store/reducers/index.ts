import { combineReducers } from 'redux';
import repoNameReducer from '../reducers/repoNameReducer';

const rootReducer = combineReducers({
  repoNameReducer,
});

export default rootReducer;
