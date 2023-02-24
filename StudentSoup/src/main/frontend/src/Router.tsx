import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Err404 from './components/err404/Err404';
import Login from './components/login/Login';
import FindAccount from './components/login/FindAccount';
import SignUp from './components/signup/SignUp';
import Restaurant from './components/restaurant/Restaurant';

const Router = () => {
  return (
    <Routes>
      <Route path="*" element={<Err404 />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login/findAccount" element={<FindAccount />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/restaurant" element={<Restaurant />} />
    </Routes>
  );
};

export default Router;
