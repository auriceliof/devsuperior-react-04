import { TokenData } from "utils/auth";
import { createContext } from "react";

export type AuthContextData = {
    authenticated: boolean;
    tokeData?: TokenData;
};

export type AuthContextType = {
    authContextData: AuthContextData;
    setAuthContextData: (AuthContextData: AuthContextData) => void;
};

export const AuthContext = createContext<AuthContextType>({
    authContextData: {
        authenticated: false,
    },
    setAuthContextData: () => null,
});
