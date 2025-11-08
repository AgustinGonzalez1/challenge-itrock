import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}

interface UsersState {
  registeredUsers: User[];
  loading: boolean;
  error: string | null;
  selectedUser: User | null;
}

const initialState: UsersState = {
  registeredUsers: [
    {
      id: '1',
      name: 'Admin User',
      email: 'admin@test.com',
      password: '123456',
    },
    {
      id: '2',
      name: 'Test User',
      email: 'test@test.com',
      password: '123456',
    },
  ],
  loading: false,
  error: null,
  selectedUser: null,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    registerStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    registerSuccess: (state, action: PayloadAction<RegisterData>) => {
      const newUser: User = {
        id: Date.now().toString(),
        ...action.payload,
      };
      state.registeredUsers.push(newUser);
      state.loading = false;
    },

    findUserByEmail: (state, action: PayloadAction<string>) => {
      state.selectedUser =
        state.registeredUsers.find((user) => user.email === action.payload) || null;
    },
  },
});

export const { registerStart, registerSuccess, findUserByEmail } = usersSlice.actions;

export default usersSlice.reducer;
