import { useIssue } from '../../../contexts/issueContext';
import { Title } from './styled';

export default function Header() {
  const { state } = useIssue();
  return <Title>{state.repo}</Title>;
}
