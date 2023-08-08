export const SET_REPO_NAME = 'SET_REPO_NAME';

export interface SetRepoNameAction {
  type: typeof SET_REPO_NAME;
  payload: string;
}

export type RepoNameActionTypes = SetRepoNameAction;

export const setRepoName = (repoName: string) => {
  return {
    type: SET_REPO_NAME,
    payload: repoName,
  };
};
