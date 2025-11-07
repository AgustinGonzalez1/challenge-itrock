"use client";

import { useForm } from "react-hook-form";
import { InputForm } from "@/components";
import Link from "next/link";
import { Mail, Lock } from "lucide-react";
import { LoginFormData, LoginFormProps } from "./types";

const LoginForm = ({ onSubmit, isLoading = false }: LoginFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>();

  const loading = isLoading || isSubmitting;

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <form
        className="space-y-6"
        onSubmit={handleSubmit(
          onSubmit || ((data) => console.log("Form Data:", data))
        )}
      >
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
              {...register("rememberMe")}
              type="checkbox"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm text-gray-900"
            >
              Recordarme
            </label>
          </div>

          <div className="text-sm">
            <a
              href="#"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              ¿Olvidaste tu contraseña?
            </a>
          </div>
        </div>

        {/* Submit button */}
        <div>
          <button
            type="submit"
            disabled={loading}
            className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white transition-colors ${
              loading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            }`}
          >
            {loading ? "Iniciando sesión..." : "Iniciar Sesión"}
          </button>
        </div>

        {/* Register link */}
        <div className="text-center">
          <p className="text-sm text-gray-600">
            ¿No tienes una cuenta?{" "}
            <Link
              href="/auth/register"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Regístrate aquí
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
