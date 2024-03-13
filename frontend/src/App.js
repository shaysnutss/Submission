import logo from './logo.svg';
import './App.css';
import SignIn from './SignIn'
import Dashboard from './Dashboard'
import Team from './Team'
import Unauthorised from './Unauthorised'
import userService from "./services/userService";
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { useState, useEffect } from "react";
import { Navigate } from 'react-router-dom';


function App() {

  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    const fetchAccount = async () => {
      try {
        const { data } = await userService.getAccount();
        setUserRole(data.role); // Assuming the role is directly on the data object
      } catch (error) {
        console.error("Failed to fetch account", error);
      }
    };

    fetchAccount();
  }, []);


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
        </Routes>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Routes>
          <Route path="/unauthorised" element={<Unauthorised />} />
        </Routes>
        <Routes>
          <Route
            path="/team"
            element={userRole === 'Manager' ? <Team /> : <Navigate replace to="/unauthorised" />}
          />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
