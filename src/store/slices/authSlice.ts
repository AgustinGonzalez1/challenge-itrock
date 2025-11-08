import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserLogin {
  id: string;
  name: string;
  email: string;
  image?: string;
}

interface AuthState {
  user: UserLogin | null;
}

const initialState: AuthState = {
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserLogin>) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
