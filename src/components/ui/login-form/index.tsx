'use client';

import { useForm } from 'react-hook-form';
import { InputForm } from '@/components';
import Link from 'next/link';
import { Mail, Lock } from 'lucide-react';
import { LoginFormData, LoginFormProps } from './types';
import { signIn, useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { clearUser, setUser, useAppDispatch } from '@/store/store';

const LoginForm = ({ isLoading = false }: LoginFormProps) => {
  const [error, setError] = useState('');
  const router = useRouter();
  const { data: session, status } = useSession();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>();

  const loading = isLoading || isSubmitting;

  useEffect(() => {
    if (session?.user) {
      dispatch(
        setUser({
          id: (session.user as any).id,
          name: session.user.name || '',
          email: session.user.email || '',
        }),
      );
    } else {
      dispatch(clearUser());
    }
  }, [session, dispatch]);

  const handleFormSubmit = async (data: LoginFormData) => {
    setError('');

    try {
      const result = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (result?.error) {
        setError('Email o contraseña incorrectos');
      } else {
        router.push('/');
      }
    } catch (error) {
      setError('Error inesperado. Intenta de nuevo.');
    }
  };

  return (
    <div className="rounded-2xl bg-white p-8 shadow-xl">
      <form className="space-y-6" onSubmit={handleSubmit(handleFormSubmit)}>
        {/* Email */}
        <InputForm
          title="Correo Electrónico"
          field="email"
          type="email"
          register={register}
          errors={errors}
          placeholder="tu@email.com"
        >
          <Mail className="h-5 w-5 text-gray-400" />
        </InputForm>

        {/* Password */}
        <InputForm
          title="Contraseña"
          field="password"
          type="password"
          register={register}
          errors={errors}
          placeholder="Ingresa tu contraseña"
        >
          <Lock className="h-5 w-5 text-gray-400" />
        </InputForm>

        {/* Remember me & Forgot password */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              {...register('rememberMe')}
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
              Recordarme
            </label>
          </div>

          <div className="text-sm">
            <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
        </div>

        {/* Error message */}
        {error && <div className="rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</div>}

        {/* Submit button */}
        <div>
          <button
            type="submit"
            disabled={loading}
            className={`group relative flex w-full justify-center rounded-lg border border-transparent px-4 py-3 text-sm font-medium text-white transition-colors ${
              loading
                ? 'cursor-not-allowed bg-blue-400'
                : 'bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none'
            }`}
          >
            {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
          </button>
        </div>

        {/* Register link */}
        <div className="text-center">
          <p className="text-sm text-gray-600">
            ¿No tienes una cuenta?{' '}
            <Link href="/auth/register" className="font-medium text-blue-600 hover:text-blue-500">
              Regístrate aquí
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
