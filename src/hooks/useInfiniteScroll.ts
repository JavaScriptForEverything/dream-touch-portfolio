import { useState, useEffect, useCallback } from 'react';

interface InfiniteScrollOptions<T> {
  initialPage?: number;
  initialLimit?: number;
  fetchData: (page: number, limit: number) => Promise<T[]>;
  threshold?: number; // Percentage from bottom (0-1)
}

export function useInfiniteScroll<T>({
  initialPage = 1,
  initialLimit = 20,
  fetchData,
  threshold = 0.2, // 20% from bottom
}: InfiniteScrollOptions<T>) {
  const [data, setData] = useState<T[]>([]);
  const [page, setPage] = useState(initialPage);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const newData = await fetchData(page, initialLimit);
      setData(prev => [...prev, ...newData]);
      setPage(prev => prev + 1);
      setHasMore(newData.length === initialLimit);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  }, [page, loading, hasMore, fetchData, initialLimit]);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const distanceFromBottom = scrollHeight - (scrollTop + clientHeight);
      const triggerThreshold = clientHeight * threshold;

      if (distanceFromBottom <= triggerThreshold) {
        loadMore();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadMore, threshold]);

  // Initial load
  useEffect(() => {
    loadMore();
  }, []); // Empty dependency to run only once

  return { data, loading, hasMore };
}



/* => Use:

import { useInfiniteScroll } from './useInfiniteScroll';

interface Post {
  id: number;
  title: string;
}

export function InfiniteScrollComponent() {
  const fetchPosts = async (page: number, limit: number) => {
    const res = await fetch(`/api/posts?_page=${page}&_limit=${limit}`);
    return await res.json();
  };

  const { data, loading, hasMore } = useInfiniteScroll<Post>({
    fetchData: fetchPosts,
    initialPage: 1,
    initialLimit: 20,
    threshold: 0.2, // Trigger when 20% from bottom
  });

  return (
    <div>
      {data.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}
      {loading && <div>Loading...</div>}
      {!hasMore && <div>No more posts</div>}
    </div>
  );
}

*/