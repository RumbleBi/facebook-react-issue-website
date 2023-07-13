// hooks/useIssue.ts
import { useState } from 'react';
import { getIssue } from '../../apis/issues';
import { type IssueList } from '../../types/issueTypes';
import useInfiniteScroll from './useInfiniteScroll';

export default function useIssue() {
  const [issueList, setIssueList] = useState<IssueList[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { page } = useInfiniteScroll(() => {
    setIsLoading(true);
    getIssue(page)
      .then((issues) =>
        setIssueList((prevIssues) => [...prevIssues, ...issues]),
      )
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  });

  return { issueList, isLoading, error };
}
