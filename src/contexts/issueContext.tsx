// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { createContext, useContext, useEffect, useReducer } from 'react';
import { getRepo } from '../apis/issues';
import { IssueProviderProps } from '../types/issueTypes';

const initialState = {
  repo: '',
  issues: [],
  issue: {},
};

const IssueContext = createContext({
  state: initialState,
  dispatch: () => null,
});

const issueReducer = (state, action) => {
  switch (action.type) {
    case 'INITIAL_ISSUES':
      return {
        ...state,
        issues: [...action.payload],
      };
    case 'ADD_ISSUES':
      return {
        ...state,
        issues: [...state.issues, ...action.payload],
      };
    case 'FIND_ISSUE':
      return {
        ...state,
        issue: state.issues.find((issue) => issue.number === action.payload),
      };
    case 'GET_ISSUE':
      return {
        ...state,
        issue: action.payload,
      };
    case 'GET_REPO':
      return {
        ...state,
        repo: action.payload,
      };
    default:
      return state;
  }
};

export const useIssue = () => useContext(IssueContext);

export function IssueProvider({ children }: IssueProviderProps) {
  const [state, dispatch] = useReducer(issueReducer, initialState);

  useEffect(() => {
    getRepo().then((res) => {
      dispatch({ type: 'GET_REPO', payload: res.full_name });
    });
  }, []);

  return (
    <IssueContext.Provider value={{ state, dispatch }}>
      {children}
    </IssueContext.Provider>
  );
}