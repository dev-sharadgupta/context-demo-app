export interface User {
    email: string;
    role: string;
}

export interface AuthContextType {
    user: User | null;
    token: string | null;
    login: (jwt: string) => void;
    logout: () => void;
    isAuthenticated: boolean;
}