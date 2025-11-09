'use client';

import { SessionProvider } from 'next-auth/react';
import { AuthProviderProps } from '@/interfaces/ui';

export function AuthProvider({ children }: AuthProviderProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
