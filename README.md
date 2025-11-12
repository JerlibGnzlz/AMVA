# 🌍 Asociación Misionera Vida Abundante

## 🧱 Estructura General del Proyecto

El ecosistema está compuesto por **3 aplicaciones principales** dentro de un **monorepo**:

| Aplicación | Descripción |
| ----------- | ------------ |
| 🕊️ **Landing Page** | Página pública informativa (misión, visión, objetivos, directiva pastoral, imágenes y videos de convenciones). |
| 🧭 **Dashboard Administrativo** | Panel para gestionar pastores, inscripciones, pagos, y estadísticas. |
| 📱 **App Móvil** | Aplicación para pastores (registro, comprobantes, inscripciones, pagos). |

Todas las aplicaciones comparten la misma **API Backend**, que centraliza autenticación, roles, inscripciones, y pagos.

---

## ⚙️ Stack Tecnológico General

| Capa          | Tecnología / Librería               | Motivo / Beneficio                         |
| ------------- | ----------------------------------- | ------------------------------------------- |
| **Frontend Web** | Next.js 16 + React Query + Tailwind | SSR, SEO, y performance moderno             |
| **Backend / API** | NestJS + Prisma + PostgreSQL      | Escalable, tipado y mantenible              |
| **Autenticación** | NextAuth.js + OAuth (Google)      | Sencilla y segura                           |
| **Pagos** | Mercado Pago + PayPal SDKs | Cobros locales e internacionales |
| **Hosting** | Vercel / Railway / Render | Integraciones modernas y CI/CD automático |
| **Almacenamiento** | Cloudinary / Supabase Storage | Manejo de imágenes y comprobantes |
| **Infraestructura** | GitHub Actions + Env Variables | Automatización y despliegue seguro |

---

## 🖥️ Frontend (Landing + Dashboard)

<details>
<summary>📦 Tecnologías y librerías principales</summary>

| Propósito                | Librería / Framework             | Motivo / Beneficio                           |
| ------------------------ | -------------------------------- | --------------------------------------------- |
| Framework principal      | **Next.js 16**                   | SEO, SSR, ISR, excelente para landing y admin |
| Estado y fetching        | **React Query**                  | Manejo de datos asincrónicos y cache local    |
| Formularios y validación | `react-hook-form` + `zod`        | Formularios tipados, seguros y performantes   |
| UI moderna               | `shadcn/ui` + `lucide-react`     | Componentes reutilizables y visualmente limpios |
| Estilos                  | **Tailwind CSS (MUI)**           | Diseño rápido y consistente                   |
| Animaciones              | `framer-motion`                  | Transiciones fluidas y atractivas             |
| Notificaciones           | `sonner` o `react-hot-toast`     | Feedback visual rápido para usuarios          |
| SEO dinámico             | `next-sitemap`, `next-seo`       | Indexación optimizada y metadatos dinámicos   |

</details>

---

## ⚙️ Backend (API NestJS)

<details>
<summary>🛠️ Tecnologías principales</summary>

| Capa / Propósito       | Tecnología / Librería         | Motivo o Beneficio                           |
| ---------------------- | ----------------------------- | --------------------------------------------- |
| Framework              | **NestJS**                    | Modular y escalable (arquitectura limpia)     |
| ORM / Base de datos    | **Prisma ORM + PostgreSQL**   | Tipado, migraciones y consultas limpias       |
| Autenticación          | **NextAuth.js + JWT / OAuth** | Integración segura y moderna con Google       |
| Pagos                  | **Mercado Pago + PayPal SDKs**| Soporte para cobros locales e internacionales |
| Archivos               | **Cloudinary / Supabase**     | Subida de imágenes, comprobantes y medios     |
| Documentación API      | **Swagger / Postman Docs**    | Rutas y endpoints claros                      |
| Validaciones backend   | `class-validator` + `zod`     | Seguridad en DTOs y tipado estricto           |
| Webhooks               | `Webhook.site`                | Pruebas y recepción de notificaciones externas |

</details>

---

## ☁️ Infraestructura

<details>
<summary>🧭 Servicios y despliegue</summary>

| Capa / Propósito     | Tecnología / Servicio           | Motivo o Beneficio                           |
| -------------------- | ------------------------------ | --------------------------------------------- |
| Hosting Frontend     | **Vercel**                     | Integración nativa con Next.js                |
| Hosting Backend/API  | **Railway / Render / Fly.io**   | Despliegue flexible y económico               |
| CI/CD                | **GitHub Actions**              | Flujo automatizado de build y test            |
| Variables seguras    | **dotenv / Vercel Env**         | Gestión centralizada de secretos              |
| Logs y métricas      | **Sentry / LogRocket**          | Monitoreo de errores y rendimiento            |

</details>

---

## 🧰 Integraciones y Utilidades

| Propósito              | Librería / Servicio          | Motivo o Beneficio                       |
| ---------------------- | --------------------------- | ---------------------------------------- |
| Subida de archivos     | `next-cloudinary`           | Subida directa desde el frontend         |
| SEO y rendimiento      | `next-sitemap`, `next-seo`  | Mejor indexación y vista previa          |
| Testing                | `Jest` + `React Testing Library` | Pruebas unitarias y de componentes     |
| Documentación          | `Swagger` o `Postman Docs`  | Documentación colaborativa de API        |

---

## 🧩 Estructura del Monorepo (Ejemplo)

```bash
/monorepo-root
│
├── apps/
│   ├── landing/           # Next.js - Página principal
│   ├── dashboard/         # Next.js - Panel administrativo
│   └── mobile/            # React Native / Expo App
│
├── packages/
│   ├── api/               # NestJS Backend
│   ├── ui/                # Componentes compartidos (shadcn/ui)
│   └── utils/             # Funciones comunes, hooks, helpers
│
└── prisma/
    └── schema.prisma      # Modelo de base de datos


📘 Autor: Jerlib González
💼 Proyecto: Asociación Misionera Vida Abundante (AMVA)
🕊️ “Id por todo el mundo y predicad el evangelio a toda criatura.”