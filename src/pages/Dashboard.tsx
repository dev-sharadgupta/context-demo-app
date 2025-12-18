import useAuth from "../hooks/useAuth";
import useTheme from "../hooks/useTheme";
import useRole from "../hooks/useRole";
import { Sun, Moon, LogOut, CheckCircle, XCircle } from "lucide-react";

export default function Dashboard() {
    const { user, logout } = useAuth();
    const { dark, toggle } = useTheme();
    const { role } = useRole();

    return (
        <div className={dark ? "dark" : ""}>
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">

                <div className="bg-white dark:bg-gray-800 shadow">
                    <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                                Dashboard
                            </h1>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                Welcome back, {user?.email || 'User'}
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <button
                                onClick={toggle}
                                className="p-2 rounded-lg bg-gray-200 dark:bg-gray-200 hover:bg-gray-400 dark:hover:bg-white transition-colors"
                                title={`Switch to ${dark ? 'light' : 'dark'} mode`}
                            >
                                {dark ? (
                                    <Sun className="w-5 h-5 text-yellow-500" />
                                ) : (
                                    <Moon className="w-5 h-5 text-gray-700" />
                                )}
                            </button>

                            <button
                                onClick={logout}
                                className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition-colors shadow-sm"
                            >
                                <LogOut className="w-4 h-4" />
                                Logout
                            </button>
                        </div>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto px-6 py-8">

                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Your Role
                        </h2>
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${role === "admin"
                            ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                            : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                            }`}>
                            {role || "user"}
                        </span>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                            Admin Area
                        </h2>

                        {role === "admin" ? (
                            <div className="flex items-start space-x-3 text-green-600 dark:text-green-400">
                                <CheckCircle className="w-5 h-5 mt-0.5" />
                                <div>
                                    <p className="font-medium">Access Granted</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                        You have access to admin-only features.
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div className="flex items-start space-x-3 text-red-600 dark:text-red-400">
                                <XCircle className="w-5 h-5 mt-0.5" />
                                <div>
                                    <p className="font-medium">Access Restricted</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                        You are not an admin.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}