'use client';

import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { InputFormProps } from './types';
import { FieldValues } from 'react-hook-form';

const InputForm = <T extends FieldValues>({
  title,
  type,
  field,
  placeholder,
  register,
  errors,
  children,
  required = true,
  disabled = false,
}: InputFormProps<T>) => {
  const [showPassword, setShowPassword] = useState(false);

  const inputType = type === 'password' ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className="text-gray-800">
      <label htmlFor={field} className="block text-sm font-medium">
        {title}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>
      <div className="relative mt-1">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          {children}
        </div>
        <input
          id={field}
          type={inputType}
          autoComplete={type}
          disabled={disabled}
          {...register(field, {
            required: required ? `${title} es requerido` : false,
          })}
          className={`block w-full rounded-lg border py-3 pr-3 pl-10 text-gray-900 placeholder-gray-400 transition-colors focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-100 ${
            errors[field] ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder={placeholder}
        />
        {type === 'password' && (
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center pr-3"
            onClick={() => setShowPassword(!showPassword)}
            disabled={disabled}
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
            ) : (
              <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
            )}
          </button>
        )}
      </div>
      {errors[field] && (
        <p className="mt-1 text-sm text-red-600">
          {typeof errors[field]?.message === 'string' ? errors[field]?.message : 'Campo inválido'}
        </p>
      )}
    </div>
  );
};

export default InputForm;
