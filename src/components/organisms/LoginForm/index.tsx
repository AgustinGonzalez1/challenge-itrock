'use client';

import { useForm } from 'react-hook-form';
import { InputForm } from '@/components/atoms';
import Link from 'next/link';
import { Mail, Lock } from 'lucide-react';
import { LoginFormData, LoginFormProps } from '@/interfaces';
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
      //Added here to avoid losing time on middlewares, better future scalability
      router.push('/');
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

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-gray-500">O continúa con</span>
          </div>
        </div>

        {/* GitHub button */}
        <div>
          <button
            type="button"
            onClick={() => signIn('github')}
            className="group relative flex w-full justify-center rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none"
          >
            <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                clipRule="evenodd"
              />
            </svg>
            Continuar con GitHub
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
