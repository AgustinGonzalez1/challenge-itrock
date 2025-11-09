// Interfaces para posts y comentarios
export interface Post {
  id: string;
  title: string;
  content: string;
  authorId: string;
  authorName?: string;
  createdAt: string;
  updatedAt?: string;
  comments?: Comment[];
  likesCount?: number;
  likedBy?: string[]; // Array de IDs de usuarios que dieron like
}

export interface Comment {
  id: string;
  postId: string;
  authorId: string;
  authorName?: string;
  content: string;
  createdAt: string;
  updatedAt?: string;
}

export interface PostsState {
  posts: Post[];
  loading: boolean;
  error: string | null;
  selectedPost: Post | null;
}

export interface CreatePostData {
  title: string;
  content: string;
}

export interface CreateCommentData {
  postId: string;
  content: string;
}
