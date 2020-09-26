import { useContext } from "react";
import { AuthContext } from "../context/Auth/auth";

export const useAuthLogin = () => {
  const context = useContext(AuthContext);

  const { state: currentUser } = context;
  return { currentUser };
};
