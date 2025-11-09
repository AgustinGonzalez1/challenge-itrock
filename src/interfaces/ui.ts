import { UseFormRegister, FieldErrors, FieldValues, Path } from 'react-hook-form';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Post, Comment } from './posts';

export interface InputFormProps<T extends FieldValues> {
  title: string;
  type: string;
  field: Path<T>;
  placeholder?: string;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  children?: React.ReactNode;
  required?: boolean;
  disabled?: boolean;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  loading?: boolean;
}

export interface NavbarProps {
  onLogout?: () => void;
}

export interface AuthButtonProps {
  // No necesita props, maneja su estado internamente
}

export interface PostActionsProps {
  postId: string;
  likesCount?: number;
  commentsCount?: number;
  onComment?: (postId: string) => void;
}

export interface PostsListProps {
  loading?: boolean;
  error?: string | null;
}

export interface PostCardProps {
  post: Post;
}

export interface AuthProviderProps {
  children: React.ReactNode;
}

export interface CommentsListProps {
  comments: Comment[];
}

export interface CommentFormProps {
  postId: string;
  onSubmit?: () => void;
}

export interface PostInteractionsProps {
  post: Post;
}
