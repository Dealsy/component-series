import { useCallback, useEffect, useRef } from "react";

type UseInfiniteScrollProps = {
  onLoadMore: () => void;
  hasMore: boolean;
  threshold?: number;
};

export default function useInfiniteScroll({
  onLoadMore,
  hasMore,
  threshold = 100,
}: UseInfiniteScrollProps) {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (target.isIntersecting && hasMore) {
        onLoadMore();
      }
    },
    [onLoadMore, hasMore]
  );

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: `0px 0px ${threshold}px 0px`,
      threshold: 0,
    };

    observerRef.current = new IntersectionObserver(handleObserver, options);

    if (loadMoreRef.current) {
      observerRef.current.observe(loadMoreRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [handleObserver, threshold]);

  return { loadMoreRef };
}
