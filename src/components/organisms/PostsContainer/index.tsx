'use client';

import { useAppSelector } from '@/store/hooks';
import { PostCard } from '@/components/molecules';

const PostsContainer = () => {
  const { posts, loading, error } = useAppSelector((state) => state.posts);

  if (loading) {
    return (
      <div className="flex justify-center py-8">
        <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">
        Error: {error}
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="py-8 text-center">
        <div className="mb-2 text-lg text-gray-500">No hay posts aún</div>
        <p className="text-gray-400">¡Sé el primero en compartir algo!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostsContainer;
