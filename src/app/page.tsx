import { Navbar } from '@/components/molecules';
import { PostsList } from '@/components/organisms';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="mx-auto max-w-2xl px-4 py-8">
        <div className="mb-8">
          <h2 className="mb-2 text-2xl font-bold text-gray-900">Feed de Posts</h2>
          <p className="text-gray-600">Descubre lo que está compartiendo la comunidad</p>
        </div>

        <PostsList />
      </main>
    </div>
  );
}
