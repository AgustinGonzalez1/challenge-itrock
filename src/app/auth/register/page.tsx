import { RegisterForm } from '@/components/organisms';

const RegisterPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-green-50 to-emerald-100 p-4">
      <div className="w-full max-w-md space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-green-600">
            <span className="text-xl font-bold text-white">M</span>
          </div>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Crear Cuenta</h2>
          <p className="mt-2 text-sm text-gray-600">Únete a codeconecta</p>
        </div>

        {/* form */}
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
