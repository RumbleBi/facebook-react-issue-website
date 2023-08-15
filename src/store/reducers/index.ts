import { combineReducers } from 'redux';
import repoNameReducer from '../reducers/repoNameReducer';
import issueListReducer from './issueListReducer';

const rootReducer = combineReducers({
  repoNameReducer,
  issueListReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
