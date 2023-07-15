import { Title } from './styled';
import { useGetRepoName } from '../../hooks/useGetRepoName';

export default function Header() {
  const { value: repo } = useGetRepoName();
  const repoName = repo?.full_name;

  return <Title>{repoName}</Title>;
}
