// hooks/useIssue.ts
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getIssues } from '../../apis/githubAPI';
import useInfiniteScroll from './useInfiniteScroll';
import { RootState } from '../../store/reducers';
import { setIssueList } from '../../store/actions/issueListAction';

export default function useIssue() {
  const dispatch = useDispatch();
  const issueList = useSelector(
    (state: RootState) => state.issueListReducer.issueList,
  );

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { page } = useInfiniteScroll(() => {
    setIsLoading(true);
    getIssues(page)
      .then((issues) => dispatch(setIssueList([...issueList, ...issues])))
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  });

  return { issueList, isLoading, error };
}
