import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PostsState, Post, Comment, CreatePostData, CreateCommentData } from '@/interfaces';

const initialState: PostsState = {
  posts: [
    // Posts mock para desarrollo
    {
      id: '1',
      title: 'Primer post de la plataforma',
      content: 'Este es el contenido del primer post. ¡Bienvenidos a codeconecta!',
      authorId: 'user1',
      authorName: 'Ana García',
      createdAt: new Date().toISOString(),
      comments: [
        {
          id: 'c1',
          postId: '1',
          authorId: 'user2',
          authorName: 'Carlos López',
          content: '¡Excelente primera publicación!',
          createdAt: new Date(Date.now() - 3600000).toISOString(),
        },
      ],
      likesCount: 5,
      likedBy: ['user3', 'user4', 'user5', 'user6', 'user7'],
    },
    {
      id: '2',
      title: 'Tips de desarrollo con Next.js',
      content: 'Aquí comparto algunos tips útiles para desarrollar con Next.js y TypeScript.',
      authorId: 'user2',
      authorName: 'Carlos López',
      createdAt: new Date(Date.now() - 7200000).toISOString(),
      comments: [],
      likesCount: 12,
      likedBy: [
        'user1',
        'user3',
        'user4',
        'user5',
        'user6',
        'user7',
        'user8',
        'user9',
        'user10',
        'user11',
        'user12',
        'user13',
      ],
    },
    {
      id: '3',
      title: 'Redux Toolkit vs Zustand',
      content: 'Comparación entre diferentes herramientas de estado global en React.',
      authorId: 'user1',
      authorName: 'Ana García',
      createdAt: new Date(Date.now() - 10800000).toISOString(),
      comments: [
        {
          id: 'c2',
          postId: '3',
          authorId: 'user3',
          authorName: 'María Rodríguez',
          content: 'Muy interesante el análisis',
          createdAt: new Date(Date.now() - 9000000).toISOString(),
        },
        {
          id: 'c3',
          postId: '3',
          authorId: 'user2',
          authorName: 'Carlos López',
          content: 'Prefiero Zustand para proyectos pequeños',
          createdAt: new Date(Date.now() - 8000000).toISOString(),
        },
      ],
      likesCount: 8,
      likedBy: ['user2', 'user4', 'user5', 'user6', 'user7', 'user8', 'user9', 'user10'],
    },
  ],
  loading: false,
  error: null,
  selectedPost: null,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // Posts
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setPosts: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
      state.loading = false;
      state.error = null;
    },
    addPost: (
      state,
      action: PayloadAction<CreatePostData & { authorId: string; authorName: string }>,
    ) => {
      const newPost: Post = {
        id: Date.now().toString(),
        title: action.payload.title,
        content: action.payload.content,
        authorId: action.payload.authorId,
        authorName: action.payload.authorName,
        createdAt: new Date().toISOString(),
        comments: [],
        likesCount: 0,
        likedBy: [],
      };
      state.posts.unshift(newPost);
    },

    // Likes - Sistema mejorado que controla un like por usuario
    toggleLike: (state, action: PayloadAction<{ postId: string; userId: string }>) => {
      const { postId, userId } = action.payload;
      const post = state.posts.find((p) => p.id === postId);
      if (post) {
        if (!post.likedBy) {
          post.likedBy = [];
        }

        const hasLiked = post.likedBy.includes(userId);

        if (hasLiked) {
          // Quitar like
          post.likedBy = post.likedBy.filter((id) => id !== userId);
          post.likesCount = (post.likesCount || 1) - 1;
        } else {
          // Agregar like
          post.likedBy.push(userId);
          post.likesCount = (post.likesCount || 0) + 1;
        }
      }
    },

    // Comments
    addComment: (
      state,
      action: PayloadAction<CreateCommentData & { authorId: string; authorName: string }>,
    ) => {
      const { postId, content, authorId, authorName } = action.payload;
      const post = state.posts.find((p) => p.id === postId);
      if (post) {
        const newComment: Comment = {
          id: Date.now().toString(),
          postId,
          authorId,
          authorName,
          content,
          createdAt: new Date().toISOString(),
        };
        if (!post.comments) {
          post.comments = [];
        }
        post.comments.push(newComment);
      }
    },

    // Selected post for detail view
    setSelectedPost: (state, action: PayloadAction<string | null>) => {
      if (action.payload) {
        state.selectedPost = state.posts.find((p) => p.id === action.payload) || null;
      } else {
        state.selectedPost = null;
      }
    },
  },
});

export const { setLoading, setError, setPosts, addPost, toggleLike, addComment, setSelectedPost } =
  postsSlice.actions;

export default postsSlice.reducer;
