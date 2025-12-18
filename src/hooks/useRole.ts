import { useContext } from "react";
import RoleContext from "../context/role/roleContext";

export default function useRole() {
    const ctx = useContext(RoleContext);
    if (!ctx) throw new Error("useRole must be used inside RoleProvider");
    return ctx;
}