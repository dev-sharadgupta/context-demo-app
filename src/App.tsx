import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import Unauthorized from "./pages/Unauthorized";
import AuthProvider from "./context/auth/AuthProvider";
import RoleProvider from "./context/role/RoleProvider";
import ThemeProvider from "./context/theme/ThemeProvider";

function App() {
  return (
    <AuthProvider>
      <RoleProvider>
        <ThemeProvider>
          <BrowserRouter>
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
              <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<Login />} />

                <Route
                  path="/dashboard"
                  element={
                    <PrivateRoute allowedRoles={["admin", "manager"]}>
                      <Dashboard />
                    </PrivateRoute>
                  }
                />

                <Route path="/unauthorized" element={<Unauthorized />} />
              </Routes>
            </div>
          </BrowserRouter>
        </ThemeProvider>
      </RoleProvider>
    </AuthProvider>
  );
}

export default App;