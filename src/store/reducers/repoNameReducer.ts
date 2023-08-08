import { SET_REPO_NAME, RepoNameActionTypes } from '../actions/repoNameAction';

interface RepoNameState {
  repoName: string;
}

const initialState: RepoNameState = {
  repoName: '',
};

export default function repoNameReducer(
  state = initialState,
  action: RepoNameActionTypes,
): RepoNameState {
  switch (action.type) {
    case SET_REPO_NAME:
      return {
        ...state,
        repoName: action.payload,
      };
    default:
      return state;
  }
}
