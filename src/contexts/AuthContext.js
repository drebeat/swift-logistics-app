import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  // const persistValue = localStorage.getItem("persist");
  const [auth, setAuth] = useState({});
  const [persist, setPersist] = useState(false);

  return (
    <AuthContext.Provider value={{ auth, setAuth, persist, setPersist }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
