// hooks/useIssue.ts
import { useState } from 'react';
import { getIssues } from '../../apis/githubAPI';
import { type Issues } from '../../types/types';
import useInfiniteScroll from './useInfiniteScroll';

export default function useIssue() {
  const [issueList, setIssueList] = useState<Issues[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { page } = useInfiniteScroll(() => {
    setIsLoading(true);
    getIssues(page)
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
