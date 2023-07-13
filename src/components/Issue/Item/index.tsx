// components/IssueItem.tsx
import { Link } from 'react-router-dom';
import { IssueList } from '../../../types/issueTypes';
import { formatDateKOR } from '../../../utils/formatDate';
import { ListWrap, Title, Comment } from './styled';

interface IssueItemProps {
  issue: IssueList;
}

const IssueItem: React.FC<IssueItemProps> = ({ issue }) => (
  <Link to={`/issues/${issue.number}`} style={{ all: 'unset' }}>
    <ListWrap>
      <Title>
        <div>
          #{issue.number} {issue.title}
        </div>
        <div>
          작성자: {issue.user.login}, 작성일: {formatDateKOR(issue.created_at)}
        </div>
      </Title>
      <Comment>코멘트: {issue.comments}</Comment>
    </ListWrap>
  </Link>
);

export default IssueItem;
