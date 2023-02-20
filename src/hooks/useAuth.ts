import { AuthContext } from "../context/AuthenticationContext";
import { useContext } from "react";


export const useAuth = () => useContext(AuthContext)