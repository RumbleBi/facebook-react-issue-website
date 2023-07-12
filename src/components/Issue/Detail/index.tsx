import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getIssueDetail, type IssueDetail } from '../../../apis/issues';
import { Wrap } from './styled';

export default function Detail() {
  const { number } = useParams();
  const [issueDetail, setIssueDetail] = useState<IssueDetail | null>(null);

  useEffect(() => {
    if (number) {
      const issueNum = Number(number);
      getIssueDetail(issueNum).then((detail) => setIssueDetail(detail));
    }
  }, [number]);

  return (
    <Wrap>
      {issueDetail && (
        <div>
          <h3>{issueDetail.title}</h3>
        </div>
      )}
    </Wrap>
  );
}
