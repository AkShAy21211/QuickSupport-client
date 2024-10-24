import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Login from './pages/Login';
function App() {
  return (
  
    <Router>
      <Routes>
        <Route path="/login" exact element={<Login/>} />
        <Route path="/" element={<></>} />
        <Route path="*" element={<></>} />
      </Routes>
    </Router>
  );
}

export default App;
