'use client';

import { Button } from '@/components/atoms';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { clearUser } from '@/store/slices/authSlice';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const AuthButton = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { data: session, status } = useSession();
  const { user } = useAppSelector((state) => state.auth);

  // Determinar si hay sesión activa
  const isLoggedIn = session?.user || user;
  const isLoading = status === 'loading';

  const handleLogout = async () => {
    try {
      dispatch(clearUser());
      await signOut({
        redirect: false,
      });
      router.push('/auth/login');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  const handleLogin = () => {
    router.push('/auth/login');
  };

  if (isLoading) {
    return (
      <Button variant="ghost" size="sm" disabled>
        ...
      </Button>
    );
  }

  if (isLoggedIn) {
    return (
      <Button variant="ghost" size="sm" onClick={handleLogout}>
        Cerrar sesión
      </Button>
    );
  }

  return (
    <Button variant="ghost" size="sm" onClick={handleLogin}>
      Iniciar sesión
    </Button>
  );
};

export default AuthButton;
