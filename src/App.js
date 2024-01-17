import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import ForgetPassword from './pages/ForgetPassword';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard name="Kuldeep Singh" />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/forget-password' element={<ForgetPassword />} />
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
