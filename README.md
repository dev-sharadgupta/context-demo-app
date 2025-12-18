/*
--------------------------------------------------------------------------------
README- step-by-step (also provided in the project README when you create it)
--------------------------------------------------------------------------------

Step-1 : Create the project (recommended: Vite + React)

npm create vite@latest context-demo-app -- --template react-ts
cd context-demo-app
npm install

Step-2: Install React Router
npm install react-router-dom

Step-3 : Install Tailwind for styling

npm install tailwindcss @tailwindcss/vite

-- context-demo-app\vite.config.ts
import tailwindcss from '@tailwindcss/vite'  // Import Tailwind


export default defineConfig({
  plugins: [react(),
    tailwindcss(), // add tailwind here
  ],
})


-- context-demo-app\src\index.css
@import "tailwindcss";  /* import css */


-- install lucide-react icon library
npm install lucide-react

-- run command 
npm install


Step-4: Replace src/App.jsx with the code in this file (or split into components if you prefer).


Step-5: Run the dev server

npm run dev



🔐 Authentication Flow
1. User enters credentials on Login page
2. Fake JWT token is generated (demo purposes)
3. Token is stored in localStorage
4. Auth context updates with user info
5. User is redirected to dashboard
6. PrivateRoute checks authentication status
7. Role-based access is verified
8. Dashboard content is displayed

--------------------------------------------------------------------------------
*/
