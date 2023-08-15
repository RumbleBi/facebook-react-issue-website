import { Fragment } from 'react';

import useIssue from '../../common/hooks/useIssue';
import IssueItem from '../../components/Issue';
import Advertisement from '../../components/Advertisement';

import { Wrap } from '../../pages/IssueList/styled';
import { shouldShowAdvertisement } from '../../utils/shouldShowAdvertisement';

export default function IssueListPage() {
  const { issueList, isLoading, error } = useIssue();

  if (error) {
    return <div>서버에 문제가 발생했습니다. 다시 시도해 주세요.</div>;
  }
  return (
    <Wrap>
      {issueList.map((issue, idx) => (
        <Fragment key={issue.keys_url}>
          <IssueItem issue={issue} />
          {shouldShowAdvertisement(idx) && (
            <Advertisement key={`ad-${idx}-${issue.keys_url}`} />
          )}
        </Fragment>
      ))}
      {isLoading && <div>로딩중입니다...</div>}
      <div id="bottom-boundary" />
    </Wrap>
  );
}
