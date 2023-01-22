import { AuthenticationContext } from "~/context/authentication/AuthenticationProvider";
import { useContext } from "react";


export default function useAuth() { return useContext(AuthenticationContext) }