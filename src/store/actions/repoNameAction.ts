export const SET_REPO_NAME = 'SET_REPO_NAME';

export const setRepoName = (repoName: string) => {
  return {
    type: SET_REPO_NAME,
    payload: repoName,
  };
};
