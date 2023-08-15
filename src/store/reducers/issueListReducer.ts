import { Issues } from '../../types/types';
import {
  SET_ISSUE_LIST,
  IssueListActionTypes,
} from '../actions/issueListAction';

interface IssueListState {
  issueList: Issues[];
}

const initialState: IssueListState = {
  issueList: [],
};

export default function issueListReducer(
  state = initialState,
  action: IssueListActionTypes,
): IssueListState {
  switch (action.type) {
    case SET_ISSUE_LIST:
      return {
        ...state,
        issueList: action.payload,
      };
    default:
      return state;
  }
}
