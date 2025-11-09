import { PostCardProps } from '@/interfaces';
import { PostInteractions } from '@/components/molecules';
import { formatDate } from '@/utils';

const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="mb-4 rounded-lg border bg-white p-6 shadow-sm">
      {/* Post Header */}
      <div className="mb-4">
        <h3 className="mb-2 text-xl font-semibold text-gray-900">{post.title}</h3>
        <p className="text-sm text-gray-500">
          Por {post.authorName || post.authorId} • {formatDate(post.createdAt)}
        </p>
      </div>

      {/* Post Content */}
      <div className="mb-4">
        <p className="whitespace-pre-wrap text-gray-700">{post.content}</p>
      </div>

      {/* Post Interactions - Client Component */}
      <PostInteractions post={post} />
    </div>
  );
};

export default PostCard;
