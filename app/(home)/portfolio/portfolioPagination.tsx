import { useInfiniteScroll } from '@/hooks/useInfiniteScroll'

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