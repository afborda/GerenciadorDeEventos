import React, { useEffect, useState } from "react";
import { createContext } from "react";

const AuthContext = createContext<{
  state: any;
}>({
  state: {},
});

const AuthProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<any>();

  useEffect(() => {}, []);

  return (
    <AuthContext.Provider value={{ state: currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
