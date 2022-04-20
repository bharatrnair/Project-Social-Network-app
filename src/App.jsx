import Login from "./components/Login.jsx";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import React from 'react';
import './App.css';
import Otp from "./components/Otp.jsx";


const App = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="login" element={<Login />} ></Route>
            <Route path="otp" element={<Otp />} ></Route>

        </Routes>
        </BrowserRouter>
               );
            }
        
        
        export default App;