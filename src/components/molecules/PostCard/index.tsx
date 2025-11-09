import { Post, PostCardProps } from '@/interfaces';
import { PostActions } from '@/components/atoms';

const PostCard = ({ post, onComment, onLike }: PostCardProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="mb-4 rounded-lg border bg-white p-6 shadow-sm">
      {/* Post Header */}
      <div className="mb-4">
        <h3 className="mb-2 text-xl font-semibold text-gray-900">{post.title}</h3>
        <p className="text-sm text-gray-500">
          Por {post.authorId} • {formatDate(post.createdAt)}
        </p>
      </div>

      {/* Post Content */}
      <div className="mb-4">
        <p className="whitespace-pre-wrap text-gray-700">{post.content}</p>
      </div>

      {/* Post Actions */}
      <div className="flex items-center justify-between border-t pt-4">
        <PostActions
          postId={post.id}
          likesCount={post.likesCount}
          commentsCount={post.comments?.length}
          onComment={onComment}
          onLike={onLike}
        />

        {post.updatedAt && (
          <span className="text-xs text-gray-400">Editado {formatDate(post.updatedAt)}</span>
        )}
      </div>
    </div>
  );
};

export default PostCard;
