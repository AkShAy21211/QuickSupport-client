import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  // Initialize state variables and set initial values based on local storage token.
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);


  
  // Functions to handle login and logout.

  const setLogin = (token) => {
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
  };

  const setLogout = () => {
    console.log('logout');
    
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setLogin,
        setLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
