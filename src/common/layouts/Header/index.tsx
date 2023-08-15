import { useDispatch, useSelector } from 'react-redux';
import { Title } from './styled';
import { useEffect } from 'react';
import { getRepoName } from '../../../apis/githubAPI';
import { setRepoName } from '../../../store/actions/repoNameAction';
import { RootState } from '../../../store/reducers';

export default function Header() {
  const dispatch = useDispatch();
  const repoName = useSelector(
    (state: RootState) => state.repoNameReducer.repoName,
  );

  useEffect(() => {
    const fetchRepoName = async () => {
      try {
        const res = await getRepoName();
        console.log(res.full_name);
        dispatch(setRepoName(res.full_name));
      } catch (err) {
        console.log(err);
      }
    };
    if (!repoName) {
      fetchRepoName();
    }
  }, [dispatch]);

  return <Title>{repoName}</Title>;
}
