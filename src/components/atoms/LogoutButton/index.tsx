'use client';

import { Button } from '@/components/atoms';
import { useAppDispatch } from '@/store/hooks';
import { clearUser } from '@/store/slices/authSlice';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const LogoutButton = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
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

  return (
    <Button variant="ghost" size="sm" onClick={handleLogout}>
      Log out
    </Button>
  );
};

export default LogoutButton;
