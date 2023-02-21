import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Err404 from './components/err404/Err404';
import Login from './components/login/Login';
import FindAccount from './components/login/FindAccount';

import SignUpProcess1 from './components/signup/SignUpProcess1';
import SignUpProcess2 from './components/signup/SignUpProcess2';

const Router = () => {
  return (
    <Routes>
      <Route path="*" element={<Err404 />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login/findAccount" element={<FindAccount />} />
      <Route path="/signup/process1" element={<SignUpProcess1 />} />
      <Route path="/signup/process2" element={<SignUpProcess2 />} />
    </Routes>
  );
};

export default Router;
