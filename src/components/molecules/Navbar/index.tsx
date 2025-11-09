import { AuthButton } from '@/components/atoms';

const Navbar = () => {
  return (
    <nav className="border-b bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="shrink-0">
              <h1 className="text-xl font-bold text-gray-900">codeconecta</h1>
            </div>
          </div>

          <div className="flex items-center">
            <AuthButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
