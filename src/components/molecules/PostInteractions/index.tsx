'use client';

import { useState } from 'react';
import { PostActions } from '@/components/atoms';
import { CommentsList, CommentForm } from '@/components/molecules';
import { PostInteractionsProps } from '@/interfaces/ui';

const PostInteractions = ({ post }: PostInteractionsProps) => {
  const [showComments, setShowComments] = useState(false);
  const commentsCount = post.comments?.length || 0;

  const handleCommentClick = () => {
    setShowComments(!showComments);
  };

  return (
    <div className="border-t pt-4">
      <PostActions
        postId={post.id}
        likesCount={post.likesCount}
        commentsCount={commentsCount}
        onComment={handleCommentClick}
      />

      {/* Comments Section */}
      {showComments && (
        <div className="mt-4 space-y-4">
          {/* Comments List */}
          {post.comments && post.comments.length > 0 && (
            <div>
              <h4 className="mb-3 text-sm font-medium text-gray-900">
                Comentarios ({commentsCount})
              </h4>
              <CommentsList comments={post.comments} />
            </div>
          )}

          {/* Comment Form */}
          <div>
            <h4 className="mb-3 text-sm font-medium text-gray-900">Agregar comentario</h4>
            <CommentForm postId={post.id} />
          </div>
        </div>
      )}
    </div>
  );
};

export default PostInteractions;
