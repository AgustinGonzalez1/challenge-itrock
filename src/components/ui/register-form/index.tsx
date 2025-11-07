'use client';

import { useForm } from 'react-hook-form';
import { InputForm } from '@/components';
import Link from 'next/link';
import { Mail, Lock, User } from 'lucide-react';
import { RegisterFormData, RegisterFormProps } from './types';

const RegisterForm = ({ onSubmit, isLoading = false }: RegisterFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>();

  const loading = isLoading || isSubmitting;

  return (
    <div className="rounded-2xl bg-white p-8 shadow-xl">
      <form
        className="space-y-6"
        onSubmit={handleSubmit(onSubmit || ((data) => console.log('Form Data:', data)))}
      >
        {/* Name */}
        <InputForm
          title="Nombre Completo"
          type="text"
          field="name"
          register={register}
          errors={errors}
          placeholder="Ingresa tu nombre completo"
        >
          <User className="h-5 w-5 text-gray-400" />
        </InputForm>

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

        {/* Confirm Password */}
        <InputForm
          title="Confirmar Contraseña"
          field="confirmPassword"
          type="password"
          register={register}
          errors={errors}
          placeholder="Confirma tu contraseña"
        >
          <Lock className="h-5 w-5 text-gray-400" />
        </InputForm>

        <div className="flex items-start">
          <div className="flex h-5 items-center">
            <input
              id="terms"
              {...register('terms')}
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="terms" className="text-gray-700">
              Acepto los{' '}
              <a href="#" className="font-medium text-green-600 hover:text-green-500">
                Términos y Condiciones
              </a>{' '}
              y la{' '}
              <a href="#" className="font-medium text-green-600 hover:text-green-500">
                Política de Privacidad
              </a>
            </label>
          </div>
        </div>

        {/* Submit button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`group relative flex w-full justify-center rounded-lg border border-transparent px-4 py-3 text-sm font-medium text-white transition-colors ${
              isSubmitting
                ? 'cursor-not-allowed bg-green-400'
                : 'bg-green-600 hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-none'
            }`}
          >
            {isSubmitting ? 'Creando cuenta...' : 'Crear Cuenta'}
          </button>
        </div>

        {/* Login link */}
        <div className="text-center">
          <p className="text-sm text-gray-600">
            ¿Ya tienes una cuenta?{' '}
            <Link href="/auth/login" className="font-medium text-green-600 hover:text-green-500">
              Inicia sesión aquí
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
