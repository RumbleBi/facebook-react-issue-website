import { useLocation } from 'react-router-dom';

import {
  Wrap,
  UserWrap,
  AvatarImg,
  InfoWrap,
  InfoTop,
  InfoBottom,
  IssueCommentCnt,
  IssueContent,
} from './styled';
import { RouterDomState } from '../../types/types';
import { formatDateKOR } from '../../utils/formatDate';
import Markdown from '../../utils/markdown';

export default function IssueDetailPage() {
  const { state } = useLocation() as RouterDomState;
  const { issue } = state;

  return (
    <Wrap>
      <UserWrap>
        <AvatarImg src={issue.user.avatar_url} alt="avatar" />
        <InfoWrap>
          <div>
            <InfoTop>
              #{issue.number} {issue.title}
            </InfoTop>
            <InfoBottom>
              작성자: {issue.user.login}, 작성일:{' '}
              {formatDateKOR(issue.created_at)}
            </InfoBottom>
          </div>
          <IssueCommentCnt>코멘트: {issue.comments}</IssueCommentCnt>
        </InfoWrap>
      </UserWrap>
      <IssueContent>
        <Markdown content={issue.body} />
      </IssueContent>
    </Wrap>
  );
}
