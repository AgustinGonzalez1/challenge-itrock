import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, RegisterData, UsersState } from '@/interfaces';

const initialState: UsersState = {
  registeredUsers: [
    {
      id: '1',
      name: 'Admin User',
      email: 'admin@test.com',
      password: '123456',
      posts: [],
    },
    {
      id: '2',
      name: 'Test User',
      email: 'test@test.com',
      password: '123456',
      posts: [],
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
        posts: [],
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
