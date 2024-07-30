import './App.css'
import Login from './login/Login'
import Profile from './profile/Profile'
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/profile/:id" element={<Profile />} />
    </Routes>
  );
}

export default App;

