import { useDispatch, useSelector } from 'react-redux';
import { Title } from './styled';
import { useEffect } from 'react';
import { getRepoName } from '../../../apis/githubAPI';
import { setRepoName } from '../../../store/actions/repoNameAction';

export default function Header() {
  const dispatch = useDispatch();
  const repoName = useSelector((state) => state.repoNameReducer.repoName);

  useEffect(() => {
    const fetchRepoName = async () => {
      try {
        const res = await getRepoName();

        dispatch(setRepoName(res.full_name));
      } catch (err) {
        console.log(err);
      }
    };
    fetchRepoName();
  }, [dispatch]);

  return <Title>{repoName}</Title>;
}
