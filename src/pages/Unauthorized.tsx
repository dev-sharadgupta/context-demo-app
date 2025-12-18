import { Ban } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Unauthorized() {
    const navigate = useNavigate();
    const { logout } = useAuth();

    const handleBackToLogin = () => {
        logout();
        navigate("/login", { replace: true }); // hard redirect
    };


    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-red-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 px-4">
            <div className="text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-red-100 dark:bg-red-900 rounded-full mb-6">
                    <Ban className="w-12 h-12 text-red-600 dark:text-red-400" />
                </div>

                <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
                    403
                </h1>
                <h2 className="text-2xl font-semibold text-red-600 dark:text-red-400 mb-4">
                    Access Denied
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
                    You don't have permission to access this page. Please contact your administrator if you believe this is an error.
                </p>

                <div className="flex gap-4 justify-center">
                    <button
                        onClick={handleBackToLogin}
                        className="px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg font-medium transition-colors shadow-sm"
                    >
                        Back to Login
                    </button>
                </div>
            </div>
        </div>
    );
}
