import { Link } from 'react-router-dom';
import { formatDateKOR } from '../../utils/formatDate';
import { ListWrap, Title, Comment } from './styled';
import { IssueItemProps } from '../../types/types';

const IssueItem = ({ issue }: IssueItemProps) => (
  <Link
    to={`/issues/${issue.number}`}
    style={{ all: 'unset' }}
    state={{ issue: issue }}
  >
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
