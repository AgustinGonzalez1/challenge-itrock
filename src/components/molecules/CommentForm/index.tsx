'use client';

import { useState } from 'react';
import { Button } from '@/components/atoms';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { addComment } from '@/store/slices/postsSlice';
import { CommentFormProps } from '@/interfaces/ui';

const CommentForm = ({ postId, onSubmit }: CommentFormProps) => {
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!content.trim() || !user) return;

    setIsSubmitting(true);

    try {
      dispatch(
        addComment({
          postId,
          content: content.trim(),
          authorId: user.id,
          authorName: user.name || user.email || 'Usuario',
        }),
      );

      setContent('');
      onSubmit?.();
    } catch (error) {
      console.error('Error adding comment:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!user) {
    return <p className="text-sm text-gray-500">Debes iniciar sesión para comentar</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Escribe tu comentario..."
        className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
        rows={3}
        disabled={isSubmitting}
      />
      <div className="flex justify-end">
        <Button
          type="submit"
          size="sm"
          disabled={!content.trim() || isSubmitting}
          loading={isSubmitting}
        >
          {isSubmitting ? 'Enviando...' : 'Comentar'}
        </Button>
      </div>
    </form>
  );
};

export default CommentForm;
