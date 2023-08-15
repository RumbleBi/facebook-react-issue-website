import { Issues } from '../../types/types';

export const SET_ISSUE_LIST = 'SET_ISSUE_LIST';

export interface SetIssueListAction {
  type: typeof SET_ISSUE_LIST;
  payload: Issues[];
}

export type IssueListActionTypes = SetIssueListAction;

export const setIssueList = (issues: Issues[]) => {
  return {
    type: SET_ISSUE_LIST,
    payload: issues,
  };
};
