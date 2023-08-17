import { githubAPI } from './config';

export const getIssues = async (pageNum = 1) => {
  try {
    const res = await githubAPI.get('/repos/facebook/react/issues', {
      params: {
        sort: 'comments',
        direction: 'desc',
        state: 'open',
        per_page: 8,
        page: pageNum,
      },
    });

    return res.data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const getRepoName = async () => {
  try {
    const res = await githubAPI.get(`/repos/facebook/react`);

    return res.data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
