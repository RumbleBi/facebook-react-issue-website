import { useState, useEffect } from 'react';

const useInfiniteScroll = (callback: () => void) => {
  const [page, setPage] = useState(1);
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!initialLoad) {
            setPage((prevPageNumber) => prevPageNumber + 1);
          } else {
            setInitialLoad(false);
          }
        }
      });
    }, options);

    const target = document.querySelector('#bottom-boundary');
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [initialLoad]);

  useEffect(() => {
    if (page > 1 || initialLoad) {
      callback();
    }
  }, [page, initialLoad]);

  return { page };
};

export default useInfiniteScroll;
