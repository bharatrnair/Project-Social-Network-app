import Login from "./components/Login.jsx";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import React from 'react';
import './App.css';


const App = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="login" element={<Login />} ></Route>

        </Routes>
        </BrowserRouter>
               );
            }
        
        
        export default App;