import React, { useState, type ChangeEvent, type FormEvent, useEffect } from 'react';
import './adminpage.scss';
import axiosInstance from 'apis/utils/AxiosInterceptor';
import AdminNavbar from './AdminNavbar';

const Adminpage = () => {
  return (
    <div className="adminpage-maincontainer">
      <AdminNavbar />
    </div>
  );
};

export default Adminpage;
