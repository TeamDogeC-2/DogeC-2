import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Err404 from './components/err404/Err404';
import Login from './components/login/Login';

const Router = () => {
  return (
    <Routes>
      <Route path="*" element={<Err404 />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Router;
