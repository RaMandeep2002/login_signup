import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// import Registrtion from "./components/registrtion";
import RegisterUser from './components/register/RegisterUser';
import Home from './components/pages/Home';
import Login from './components/login/Login';

function App() {
  return (
    <Router>
      <Routes>
        {/* {/* <Route path="*" element={<Loginform />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/index" element={<Home />} />
        <Route path="/register" element={<RegisterUser />} />
      </Routes>
    </Router>
  );
}

export default App;
