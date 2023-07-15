import { combineReducers, createStore } from 'redux';
import { issuesReducer, repoNameReducer } from './github';

// root reducer
export const rootReducer = combineReducers({
  issues: issuesReducer,
  repoName: repoNameReducer,
});

// store
export const store = createStore(rootReducer);
