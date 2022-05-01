import Login from "./components/Login.jsx";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import React from 'react';
import './App.css';
import Otp from "./components/Otp.jsx";
import Profile from './components/Profile.jsx';
import Chat from './components/Chat.jsx';
import Home from './components/Home.jsx';
import PersonalChat from './components/PersonalChat.jsx'
import Notifications from './components/Notifications.jsx'


const App = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="login" element={<Login />} ></Route>
            <Route path="otp" element={<Otp />} ></Route>
            <Route path="profile" element={<Profile />} ></Route>
            <Route path="chat" element={<Chat />} ></Route>
            <Route path="home" element={<Home />} ></Route>
            <Route path="personalChat" element={<PersonalChat />} ></Route>
            <Route path="notifications" element={<Notifications />}></Route>

        </Routes>
        </BrowserRouter>
               );
            }
        
        
        export default App;