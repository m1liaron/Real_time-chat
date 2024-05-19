import {createContext, useContext, useState} from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(localStorage.getItem("token") || null);

    return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
}