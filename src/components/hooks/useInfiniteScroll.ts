// src/hooks/useInfiniteScroll.ts
import { useState, useEffect } from 'react';

const useInfiniteScroll = (callback: () => void) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setPage((prevPageNumber) => prevPageNumber + 1);
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
  }, []);

  useEffect(() => {
    callback();
  }, [page]);

  return { page };
};

export default useInfiniteScroll;
