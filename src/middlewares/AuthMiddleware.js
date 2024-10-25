import { Navigate } from "react-router-dom";
import { AuthContext, useAuthContext } from "../context/AuthContext";

const AuthMiddleware = ({ children }) => {
  const { isAuthenticated } = useAuthContext(AuthContext);


  return isAuthenticated ? children : <Navigate to={"/login"} replace />;
};

export default AuthMiddleware;
