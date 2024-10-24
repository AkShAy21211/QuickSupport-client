import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import AuthMiddleware from "./middlewares/AuthMiddleware";
import { AuthContext, useAuthContext } from "./context/AuthContext";

function App() {
  const { isAuthenticated } = useAuthContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            isAuthenticated ? <Navigate to="/dashboard" replace /> : <Login />
          }
        />
        <Route
          path="/dashboard"
          element={
            <AuthMiddleware>
              <div>Dashboard</div>
            </AuthMiddleware>
          }
        />
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="*" element={<></>} />
      </Routes>
    </Router>
  );
}

export default App;
