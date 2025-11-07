import { LoginForm } from '@/components';

const loginPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-blue-50 to-indigo-100 p-4">
      <div className="w-full max-w-md space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600">
            <span className="text-xl font-bold text-white">M</span>
          </div>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Iniciar Sesión</h2>
          <p className="mt-2 text-sm text-gray-600">Ingresa a tu cuenta para continuar</p>
        </div>

        {/* Form */}
        <LoginForm />
      </div>
    </div>
  );
};

export default loginPage;
