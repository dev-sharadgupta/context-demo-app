import { useState, type ReactNode } from "react";
import AuthContext from "./authContext";
import type { User } from "../../types/auth";

function decodeUser(token: string | null): User | null {
    if (!token) return null;

    try {
        const payload = JSON.parse(atob(token.split(".")[1]));
        return payload.user || null;
    } catch {
        return null;
    }
}

interface Props {
    children: ReactNode;
}

export default function AuthProvider({ children }: Props) {
    const initialToken = localStorage.getItem("token");

    const [token, setToken] = useState<string | null>(initialToken);
    const [user, setUser] = useState<User | null>(() => decodeUser(initialToken));

    const login = (jwt: string) => {
        localStorage.setItem("token", jwt);
        setToken(jwt);
        setUser(decodeUser(jwt));
    };

    const logout = () => {
        localStorage.removeItem("token");
        setToken(null);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout, isAuthenticated: !!token }}>
            {children}
        </AuthContext.Provider>
    );
}
