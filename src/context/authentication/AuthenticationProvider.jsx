import { useState } from "react";
import { createContext } from "react";


export const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {

    const [token, setToken] = useState("ikj23r23fdcnei9j02j32fnv02edjl");

    const login = ({ credentials }) => {

    }

    return (
        <AuthenticationContext.Provider value={{ token, login }}>
            {children}
        </AuthenticationContext.Provider>
    )
}