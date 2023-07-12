import { githubAPI } from './config';

export interface IssueList {
  title: string;
  number: number;
  id: number;
  created_at: string;
  comments: number;
  user: {
    login: string;
  };
}
export interface IssueDetail extends IssueList {
  body: string;
  user: {
    login: string;
    avatar_url: string;
  };
}

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

// 리스트페이지
// id(id), 이슈번호(number), 이슈제목(title), 작성자(user.login), 작성일(created_at), 코멘트 수(comments)

// 상세페이지
// id(id), 이슈번호(number), 이슈제목(title), 작성자(user.login), 작성일(created_at), 코멘트 수(comments), 작성자 프로필 이미지(user.avatar_url), 본문(body)
