'use client';

import { PostActionsProps } from '@/interfaces/ui';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { toggleLike } from '@/store/slices/postsSlice';

const PostActions = ({
  postId,
  likesCount = 0,
  commentsCount = 0,
  onComment,
}: PostActionsProps) => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  const { posts } = useAppSelector((state) => state.posts);

  // Get current post to verify if user liked it
  const post = posts.find((p) => p.id === postId);
  const hasLiked = post?.likedBy?.includes(user?.id || '') || false;

  const handleLike = () => {
    if (user) {
      dispatch(toggleLike({ postId, userId: user.id }));
    } else {
      console.log('User must be logged in to like posts');
    }
  };

  const handleComment = () => {
    onComment?.(postId);
  };

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={handleLike}
        className={`flex items-center space-x-1 transition-colors ${
          hasLiked ? 'text-red-600 hover:text-red-700' : 'text-gray-600 hover:text-blue-600'
        }`}
      >
        <svg
          className="h-5 w-5"
          fill={hasLiked ? 'currentColor' : 'none'}
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        <span>{likesCount}</span>
      </button>

      <button
        onClick={handleComment}
        className="flex items-center space-x-1 text-gray-600 transition-colors hover:text-blue-600"
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
        <span>{commentsCount} comentarios</span>
      </button>
    </div>
  );
};

export default PostActions;
