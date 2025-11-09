# Challenge ITRock - Plataforma Social para Desarrolladores

Una plataforma social moderna construida con Next.js 16, TypeScript, Redux Toolkit, NextAuth y Tailwind CSS. Permite a los desarrolladores compartir posts, dar likes, comentar y conectar entre sí.

## 🚀 Características

- **Autenticación completa** con NextAuth (credenciales + GitHub OAuth)
- **Sistema de posts** con likes y comentarios en tiempo real
- **Arquitectura moderna** con Server/Client Components optimizados
- **State management** con Redux Toolkit
- **UI responsive** con Tailwind CSS
- **Atomic Design** para componentes reutilizables

## 📋 Requisitos previos

Antes de instalar el proyecto, asegúrate de tener:

- **Node.js** (versión 18 o superior)
- **pnpm** como gestor de paquetes

### Instalación de pnpm

Si no tienes pnpm instalado, ejecuta:

```bash
npm install -g pnpm
```

## 🛠️ Instalación

Sigue estos pasos para instalar y ejecutar el proyecto localmente:

### 1. Clonar el repositorio

```bash
git clone https://github.com/AgustinGonzalez1/challenge-itrock.git
```

### 2. Navegar a la carpeta del proyecto

```bash
cd challenge-itrock
```

### 3. Instalar dependencias

```bash
pnpm install
```

### 4. Inicializar el proyecto

```bash
pnpm dev
```

El proyecto se ejecutará en [http://localhost:3000](http://localhost:3000)

## 🔐 Variables de entorno

Para facilitar la instalación y que puedas levantar el proyecto lo más rápido posible, las variables de entorno están visibles en el archivo `.env`:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=Iu7x4L3R9pQ2sVt8mN0bZc6YfHjKp1Wx

# GitHub OAuth
GITHUB_CLIENT_ID=Iv23liLuEQSu4PNSZGzS
GITHUB_CLIENT_SECRET=a894189cf4266757ee5a6c4547d6ab4fb1b34429
```

**Nota:** En un proyecto de producción real, estas variables estarían en `.env.local` y no se subirían al repositorio.

## 🏗️ Tecnologías utilizadas

- **Next.js 16** - Framework de React con App Router
- **TypeScript** - Tipado estático
- **Redux Toolkit** - Estado global
- **NextAuth** - Autenticación
- **Tailwind CSS** - Estilos
- **React Hook Form** - Manejo de formularios

## 🎯 Scripts disponibles

```bash
pnpm dev          # Ejecutar en desarrollo
pnpm build        # Construir para producción
pnpm start        # Ejecutar en producción
pnpm lint         # Verificar código
pnpm format       # Formatear código con Prettier
```

## 📱 Funcionalidades

### Autenticación

- Registro e inicio de sesión con email/password
- Login con GitHub OAuth
- Protección de rutas con middleware
- Persistencia de sesiones

### Posts y Interacciones

- Crear y visualizar posts
- Sistema de likes (un like por usuario)
- Sistema de comentarios
- Vista en tiempo real de cambios

### UI/UX

- Diseño responsive
- Atomic Design para componentes
- Expresión mínima de CSR
- Server Components optimizados

## 🚀 Deploy

El proyecto está configurado para deploy automático en Vercel. Las variables de entorno deben configurarse en el dashboard de Vercel.

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es parte de un challenge técnico para ITRock.

---

**¡Gracias por revisar este proyecto!** 🙌
