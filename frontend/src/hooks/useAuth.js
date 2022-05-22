import { useContext } from "react";
import { AuthContext } from "../context/JWTAuthContext";

export const useAuth = () => useContext(AuthContext);
