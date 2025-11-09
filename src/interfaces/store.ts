// Interfaces para usuarios y store
export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
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

// Interfaces para el estado del store
export interface UsersState {
  registeredUsers: User[];
  loading: boolean;
  error: string | null;
  selectedUser: User | null;
}

export interface AuthState {
  user: UserLogin | null;
}
