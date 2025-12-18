import { createContext } from "react";
import type { RoleContextType } from "../../types/role";

const RoleContext = createContext<RoleContextType | undefined>(undefined);

export default RoleContext;
