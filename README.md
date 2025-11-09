# Challenge ITRock - Plataforma Social para Desarrolladores

Una plataforma social moderna construida con Next.js 16, TypeScript, Redux Toolkit, NextAuth y Tailwind CSS. Permite a los desarrolladores compartir posts, dar likes, comentar y conectar entre sí.

## 🌐 Demo en vivo

**URL del proyecto:** [https://challenge-itrock.vercel.app/](https://challenge-itrock.vercel.app/)

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

Para facilitar la instalación y testing, se incluye un archivo `.env` con las variables necesarias para que el proyecto funcione de inmediato.

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

## 🚀 Deploy en Vercel

El deploy del proyecto es bastante sencillo. Simplemente subí el repositorio desde GitHub y en el apartado de configuraciones y variables de entorno agregué las 4 variables necesarias para que el proyecto funcione.

**Configuración de OAuth:** Para el deploy creé dos aplicaciones OAuth en GitHub:

- Una para desarrollo local (configurada en las variables de entorno del repositorio)
- Otra para producción (configurada en las variables de entorno de Vercel)

Esto permite que tanto el entorno local como el de producción funcionen correctamente con la autenticación de GitHub.

## 📄 Licencia

Este proyecto es parte de un challenge técnico para ITRock.

---

**¡Gracias por revisar este proyecto!** 🙌
