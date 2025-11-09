// Interfaces for users and store
export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  posts?: string[]; // Only post IDs, not the complete objects
}

export interface UserLogin {
  id: string;
  name: string;
  email: string;
  image?: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}

// Interfaces for store state
export interface UsersState {
  registeredUsers: User[];
  loading: boolean;
  error: string | null;
  selectedUser: User | null;
}

export interface AuthState {
  user: UserLogin | null;
}
