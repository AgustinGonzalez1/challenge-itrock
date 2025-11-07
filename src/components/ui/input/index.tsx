"use client";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { InputFormProps } from "./types";
import { FieldValues } from "react-hook-form";

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

  const inputType =
    type === "password" ? (showPassword ? "text" : "password") : type;

  return (
    <div className="text-gray-800">
      <label htmlFor={field} className="block text-sm font-medium">
        {title}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="mt-1 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
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
          className={`block w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors placeholder-gray-400 text-gray-900 disabled:bg-gray-100 disabled:cursor-not-allowed ${
            errors[field] ? "border-red-500" : "border-gray-300"
          }`}
          placeholder={placeholder}
        />
        {type === "password" && (
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
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
          {typeof errors[field]?.message === "string"
            ? errors[field]?.message
            : "Campo inválido"}
        </p>
      )}
    </div>
  );
};

export default InputForm;
