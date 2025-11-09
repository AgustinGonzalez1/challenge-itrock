export { store } from './index';
export type { RootState, AppDispatch } from './index';
export { useAppDispatch, useAppSelector } from './hooks';
export { StoreProvider } from './StoreProvider';

// Auth
export { setUser, clearUser } from './slices/authSlice';

// Users
export { registerStart, registerSuccess, findUserByEmail } from './slices/usersSlice';

// Posts
export {
  setLoading,
  setError,
  setPosts,
  addPost,
  toggleLike,
  addComment,
  setSelectedPost,
} from './slices/postsSlice';
