import { useLocation, useParams } from 'react-router-dom';

import { Wrap } from './styled';

export default function IssueDetailPage() {
  const { state } = useLocation();
  const { number } = useParams();
  console.log(number);

  return (
    <Wrap>
      {state.issue && (
        <div>
          <h3>{state.issue.title}</h3>
        </div>
      )}
    </Wrap>
  );
}
