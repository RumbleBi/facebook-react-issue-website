import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

import { AdWrap, Comment, ListWrap, Title, Wrap } from './styled';
import { getIssue, IssueList } from '../../apis/issues';
import { formatDateKOR } from '../../utils/formatDate';

import wanted_logo from '../../img/wanted_logo.png';
import useInfiniteScroll from '../hooks/useInfiniteScroll';

export default function Issue() {
  const [issueList, setIssueList] = useState<IssueList[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { page } = useInfiniteScroll(() => {
    setIsLoading(true);
    getIssue(page)
      .then((issues) =>
        setIssueList((prevIssues) => [...prevIssues, ...issues]),
      )
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  });

  if (error) {
    return <div>에러발생...</div>;
  }

  return (
    <Wrap>
      {issueList.map((issues, index) => (
        <Fragment key={issues.id}>
          <Link to={`/issues/${issues.number}`} style={{ all: 'unset' }}>
            <ListWrap>
              <Title>
                <div>
                  #{issues.number} {issues.title}
                </div>
                <div>
                  작성자: {issues.user.login}, 작성일:{' '}
                  {formatDateKOR(issues.created_at)}
                </div>
              </Title>
              <Comment>코멘트: {issues.comments}</Comment>
            </ListWrap>
          </Link>
          {(index + 1) % 4 === 0 && (
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
      {isLoading && <div>로딩중...</div>}
      <div id="bottom-boundary" />
    </Wrap>
  );
}
