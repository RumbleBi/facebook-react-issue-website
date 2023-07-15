// Action type
const GET_ISSUES = 'GET_ISSUES';
const GET_REPO_NAME = 'GET_REPO_NAME';

// Action Creator
export function getActionIssues() {
  return { type: GET_ISSUES };
}
export function getActionRepoName() {
  return { type: GET_REPO_NAME };
}

// init state
const INITIAL_STATE = {
  repoName: 'test',
};

// Reducer
export function issuesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_ISSUES:
      return {
        ...state,
        issues: [...action.payload],
      };

    default:
      return state;
  }
}

export function repoNameReducer(state = INITIAL_STATE.repoName, action) {
  switch (action.type) {
    case GET_REPO_NAME:
      return state;

    default:
      return state;
  }
}
