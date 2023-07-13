import { IssueDetail, IssueList, Repo } from '../types/issueTypes';
import { githubAPI } from './config';

export const getIssue = async (pageNum = 1): Promise<IssueList[]> => {
  try {
    const res = await githubAPI.get('/repos/facebook/react/issues', {
      params: {
        sort: 'comments',
        direction: 'desc',
        state: 'open',
        per_page: 10,
        page: pageNum,
      },
    });

    console.log(res.data);
    return res.data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const getIssueDetail = async (
  issueNum: number,
): Promise<IssueDetail> => {
  try {
    const res = await githubAPI.get(`/repos/facebook/react/issues/${issueNum}`);
    console.log(res.data);
    return res.data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const getRepo = async (): Promise<Repo> => {
  try {
    const res = await githubAPI.get(`/repos/facebook/react`);
    return res.data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
