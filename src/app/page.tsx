import { Navbar } from '@/components/molecules';
import { PostsList } from '@/components/organisms';
import { Post } from '@/interfaces';

// Posts de ejemplo para mostrar la vista
const mockPosts: Post[] = [
  {
    id: '1',
    title: '¡Bienvenidos a codeconecta!',
    content:
      'Esta es una plataforma donde los desarrolladores pueden compartir sus ideas, proyectos y conectar con otros programadores. ¡Esperamos que disfruten la experiencia!',
    authorId: 'admin',
    createdAt: new Date().toISOString(),
    likesCount: 5,
    comments: [
      {
        id: '1',
        postId: '1',
        authorId: 'user1',
        content: '¡Excelente plataforma!',
        createdAt: new Date().toISOString(),
      },
    ],
  },
  {
    id: '2',
    title: 'Tips para programar en React',
    content:
      'Hola a todos! Quería compartir algunos tips que he aprendido trabajando con React: 1. Siempre usa componentes funcionales 2. Aprovecha los custom hooks 3. Mantén el estado lo más simple posible  ¿Qué otros consejos agregarían?',
    authorId: 'developer123',
    createdAt: new Date(Date.now() - 3600000).toISOString(),
    likesCount: 12,
    comments: [],
  },
  {
    id: '3',
    title: 'Mi primer proyecto full-stack',
    content:
      'Acabo de completar mi primera aplicación full-stack usando Next.js, TypeScript y Prisma. Fue todo un desafío pero aprendí muchísimo en el proceso. ¡Gracias a esta comunidad por todo el apoyo!',
    authorId: 'newbie_dev',
    createdAt: new Date(Date.now() - 7200000).toISOString(),
    likesCount: 8,
    comments: [],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="mx-auto max-w-2xl px-4 py-8">
        <div className="mb-8">
          <h2 className="mb-2 text-2xl font-bold text-gray-900">Feed de Posts</h2>
          <p className="text-gray-600">Descubre lo que está compartiendo la comunidad</p>
        </div>

        <PostsList posts={mockPosts} />
      </main>
    </div>
  );
}
