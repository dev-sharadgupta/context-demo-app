import type { ReactNode } from "react";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";
import { Navigate } from "react-router-dom";

interface Props {
    children: ReactNode;
    allowedRoles: string[];
}

export default function PrivateRoute({ children, allowedRoles }: Props) {
    const { isAuthenticated, token } = useAuth();
    const { role } = useRole();

    if (!isAuthenticated && !token) return <Navigate to="/login" />
    if (!allowedRoles.includes(role)) return <Navigate to="/unauthorized" />

    return <>{children}</>;

}