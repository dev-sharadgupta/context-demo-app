# 🔐 Context Demo App (React + TypeScript)

A demo application showcasing **authentication flow using React Context**, built with **React, TypeScript, Vite, Tailwind CSS, and React Router**.

---

## 🚀 Getting Started

### Step 1: Create the Project (Vite + React + TypeScript)

```bash
npm create vite@latest context-demo-app -- --template react-ts
cd context-demo-app
npm install
```

---

### Step 2: Install React Router

```bash
npm install react-router-dom
```

---

### Step 3: Install Tailwind CSS

```bash
npm install tailwindcss @tailwindcss/vite
```

#### Update `vite.config.ts`

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss() // Tailwind plugin
  ],
})
```

#### Update `src/index.css`

```css
@import "tailwindcss";
```

---

### Step 4: Install Icons (Optional)

```bash
npm install lucide-react
```

---

### Step 5: Replace App Component

Replace:

```
src/App.tsx
```

with the provided implementation.
You may also split the logic into reusable components for better structure.

---

### Step 6: Run the Development Server

```bash
npm run dev
```

Visit:

```
http://localhost:5173
```

---

## 🔐 Authentication Flow

This project demonstrates a **mock authentication system** using React Context:

1. User enters credentials on the **Login page**
2. A **fake JWT token** is generated (for demo purposes)
3. Token is stored in `localStorage`
4. Auth Context updates with user information
5. User is redirected to the **Dashboard**
6. `PrivateRoute` checks authentication status
7. Role-based access control is verified
8. Protected dashboard content is displayed

---

## ✨ Features

* 🔑 Context-based authentication
* 🔐 Protected routes using `PrivateRoute`
* 👤 Role-based access control
* 💾 localStorage persistence
* ⚡ Fast setup with Vite
* 🎨 Tailwind CSS styling
* 🧩 Clean and modular structure

---

## 🛠 Tech Stack

* React + TypeScript
* Vite
* React Router DOM
* Tailwind CSS
* Lucide React (icons)

---

## 📌 Notes

* This is a **demo project** — authentication is not secure (uses fake JWT)
* Designed to understand:

  * Context API
  * Route protection
  * Role-based access
* Easily extendable with a real backend

---

## 📄 License

This project is open-source and free to use.
