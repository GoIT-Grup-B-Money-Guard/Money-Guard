import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegistrationPage />} />
      </Routes>
    </>
  );
}

export default App;
