import { useDispatch } from 'react-redux';
import { useAsync } from './useAsync';
import { getRepoName } from '../../apis/githubAPI';
import { getActionRepoName } from '../../store/github';

export const useGetRepoName = () => {
  const dispatch = useDispatch();

  const { execute, status, value, error } = useAsync(getRepoName, true);

  if (status === 'success') {
    dispatch(getActionRepoName(value));
  }

  return { execute, status, value, error };
};
