import { UseFormRegister, FieldErrors, FieldValues, Path } from 'react-hook-form';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Post } from './posts';

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

export interface LogoutButtonProps {
  onLogout?: () => void;
}

export interface PostActionsProps {
  postId: string;
  likesCount?: number;
  commentsCount?: number;
  onComment?: (postId: string) => void;
  onLike?: (postId: string) => void;
}

export interface PostsListProps {
  posts: Post[];
  loading?: boolean;
  error?: string | null;
  onComment?: (postId: string) => void;
  onLike?: (postId: string) => void;
}

export interface PostCardProps {
  post: Post;
  onComment?: (postId: string) => void;
  onLike?: (postId: string) => void;
}

export interface AuthProviderProps {
  children: React.ReactNode;
}
