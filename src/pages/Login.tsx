import { useEffect, useState, type FormEvent } from "react";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";
import useTheme from "../hooks/useTheme";
import { Sun, Moon, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const { login, isAuthenticated } = useAuth();
    const { setRole } = useRole();
    const { dark, toggle } = useTheme();
    const navigate = useNavigate();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // Redirect to dashboard if already logged in
    useEffect(() => {
        if (isAuthenticated) {
            navigate("/dashboard");
        }
    }, [isAuthenticated, navigate]);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        await new Promise(resolve => setTimeout(resolve, 500));

        const fakePayload = btoa(JSON.stringify({ user: { email, role: "admin" } }));
        const fakeToken = `header.${fakePayload}.signature`;

        login(fakeToken);
        setRole("admin");

        setIsLoading(false);
        navigate("/dashboard");
    };




    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 px-4 transition-colors duration-300">

            <button
                onClick={toggle}
                className="fixed top-6 right-6 p-3 rounded-lg bg-gray-200 dark:bg-gray-200 hover:bg-gray-400 dark:hover:bg-white shadow-lg transition-colors"
                title={`Switch to ${dark ? 'light' : 'dark'} mode`}
            >
                {dark ? (
                    <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                    <Moon className="w-5 h-5 text-gray-700" />
                )}
            </button>

            <div className="w-full max-w-md">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transition-colors duration-300">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                            Context Demo Login
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mt-2">
                            Sign in to your account
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Email Address
                            </label>
                            <input
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
                                type="email"
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
                                placeholder="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? "Signing in..." : "Sign In"}
                        </button>
                    </form>

                    <div className="mt-6 p-4 bg-blue-50 dark:bg-gray-700 rounded-lg transition-colors duration-300">
                        <p className="text-xs text-gray-600 dark:text-gray-400 text-center flex items-center justify-center gap-2">
                            <Info className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                            <span><strong>Demo Mode:</strong> Use any email and password to login</span>
                        </p>
                    </div>
                </div>

                <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
                    Don't have an account?{" "}
                    <a href="#" className="text-blue-500 hover:text-blue-600 font-medium">
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
}