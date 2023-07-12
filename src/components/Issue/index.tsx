import { useEffect, useState } from 'react';
import { IssueList, getIssue } from '../../apis/issues';
import { Wrap } from './styled';
import { Link } from 'react-router-dom';

export default function Issue() {
  const [issueList, setIssueList] = useState<IssueList[]>([]);
  useEffect(() => {
    getIssue().then((issues) => setIssueList([...issues]));
  }, []);

  return (
    <Wrap>
      {issueList.map((issue, index) => (
        <Link to={`/issues/${issue.number}`} key={index}>
          {issue.title}
        </Link>
      ))}
    </Wrap>
  );
}
