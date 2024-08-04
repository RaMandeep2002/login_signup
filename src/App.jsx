import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// import Registrtion from "./components/registrtion";
import RegisterUser from './components/register/RegisterUser';
import Home from './components/pages/Home';
import Login from './components/login/Login';
import OtpPage from './components/otp/OtpPage';
import Profile from './components/pages/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Home />} />
        {/* <Route path="*" element={<Login />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<OtpPage />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
