// components/Issue.tsx
import { Fragment } from 'react';
import useIssue from '../hooks/useIssue';
import IssueItem from '../Issue/Item';
import { AdWrap, Wrap } from './styled';
import wanted_logo from '../../img/wanted_logo.png';

export default function Issue() {
  const { issueList, isLoading, error } = useIssue();

  if (error) {
    return <div>서버에 문제가 발생했습니다. 다시 시도해 주세요.</div>;
  }

  return (
    <Wrap>
      {issueList.map((issue, idx) => (
        <Fragment key={issue.id}>
          <IssueItem issue={issue} />
          {(idx + 1) % 4 === 0 && (
            <AdWrap
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.wanted.co.kr/"
            >
              <img src={wanted_logo} alt="wanted_logo" />
            </AdWrap>
          )}
        </Fragment>
      ))}
      {isLoading && <div>로딩중입니다...</div>}
      <div id="bottom-boundary" />
    </Wrap>
  );
}
