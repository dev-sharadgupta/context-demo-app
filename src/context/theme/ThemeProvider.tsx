import { useEffect, useState, type ReactNode } from "react";
import ThemeContext from "./themeContext";

interface Props {
    children: ReactNode;
}

export default function ThemeProvider({ children }: Props) {
    const [dark, setDark] = useState<boolean>(
        localStorage.getItem("theme") === "dark"
    );

    useEffect(() => {
        document.documentElement.classList.toggle("dark", dark);
        localStorage.setItem("theme", dark ? "dark" : "light");
    }, [dark]);

    const toggle = () => setDark((prev) => !prev);

    return (
        <ThemeContext.Provider value={{ dark, toggle }}>
            {children}
        </ThemeContext.Provider>
    );
}
