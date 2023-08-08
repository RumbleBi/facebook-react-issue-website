import { SET_REPO_NAME } from '../actions/repoNameAction';

const initialState = {
  repoName: '',
};

export default function repoNameReducer(state = initialState, action) {
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
