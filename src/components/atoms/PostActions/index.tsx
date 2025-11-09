'use client';

import { PostActionsProps } from '@/interfaces/ui';

const PostActions = ({
  postId,
  likesCount = 0,
  commentsCount = 0,
  onComment,
  onLike,
}: PostActionsProps) => {
  const handleLike = () => {
    console.log('Like clicked for post:', postId);
    onLike?.(postId);
  };

  const handleComment = () => {
    console.log('Comment clicked for post:', postId);
    onComment?.(postId);
  };

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={handleLike}
        className="flex items-center space-x-1 text-gray-600 transition-colors hover:text-blue-600"
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
