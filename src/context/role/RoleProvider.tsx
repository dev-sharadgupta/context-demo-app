import { useState, type ReactNode } from "react";
import RoleContext from "./roleContext";

interface Props {
    children: ReactNode;
}

export default function RoleProvider({ children }: Props) {
    const [role, setRole] = useState<string>("admin");

    return (
        <RoleContext.Provider value={{ role, setRole }}>
            {children}
        </RoleContext.Provider>
    );
}
