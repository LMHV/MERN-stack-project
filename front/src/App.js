import './App.css';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register'
import LoggedPage from './pages/LoggedPage';
import { UserProvider } from './context/UserProvider';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <UserProvider>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path='/logged' element={<LoggedPage/>} />
        </Routes>
    </UserProvider>
  );
}

export default App;
