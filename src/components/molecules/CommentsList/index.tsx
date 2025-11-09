import { CommentsListProps } from '@/interfaces/ui';
import { formatDateShort } from '@/utils';

const CommentsList = ({ comments }: CommentsListProps) => {
  if (comments.length === 0) {
    return <p className="text-sm text-gray-500">No hay comentarios aún</p>;
  }

  return (
    <div className="space-y-3">
      {comments.map((comment) => (
        <div key={comment.id} className="border-l-2 border-gray-200 pl-3">
          <p className="text-sm text-gray-900">{comment.content}</p>
          <p className="text-xs text-gray-500">
            Por {comment.authorName || comment.authorId} • {formatDateShort(comment.createdAt)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CommentsList;
