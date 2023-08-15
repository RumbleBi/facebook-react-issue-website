import styled from 'styled-components';

const Wrap = styled.section`
  width: 700px;
  height: 500px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 20px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
`;

const UserWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;
const AvatarImg = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;
const InfoWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid black;
`;

const InfoTop = styled.div`
  font-size: 18px;
  margin-bottom: 5px;
`;
const InfoBottom = styled.div`
  font-size: 14px;
`;
const IssueCommentCnt = styled.div`
  font-size: 14px;
`;

const IssueContent = styled.article`
  line-height: 2;
  padding: 0px 20px;
`;

export {
  Wrap,
  UserWrap,
  AvatarImg,
  InfoWrap,
  InfoTop,
  InfoBottom,
  IssueCommentCnt,
  IssueContent,
};
