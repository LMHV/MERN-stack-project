import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import { UserProvider } from './context/UserProvider';


function App() {
  return (
      <UserProvider>
        <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/login" element={<Login />} />
        </Routes>
      </UserProvider>
  );
}

export default App;
