import { useLocation } from 'react-router-dom';

import { Wrap } from './styled';
import { RouterDomState } from '../../types/types';

export default function IssueDetailPage() {
  const { state } = useLocation() as RouterDomState;
  const { issue } = state;

  console.log(issue);
  return (
    <Wrap>
      <div>
        <h3>{issue.title}</h3>
        <div>{issue.body}</div>
      </div>
    </Wrap>
  );
}
