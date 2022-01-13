import Cookies from "js-cookie";
import React, { useState } from "react";

const LogoutBtn = ({ auth }) => {
  const [msg, setMsg] = useState("");
  const handleLogout = (e) => {
    e.preventDefault();
    setMsg("Loading...");
    axios.interceptors.request.use((config) => {
      const token = localStorage.getItem('access_token');
      config.headers.Authorization = token && `Bearer ${token}`;
      return config;
    });
    axios.post('/api/logout').then(res => {
      if (res.status === 200) {
        setMsg("Success!");
        Cookies.remove('access_token', { expires: 7 });
        window.location.replace('/login');
      }
    }).catch(err => {
      setMsg("Failed!");
    });
  }
  return(
    <>
      <button type="button" onClick={handleLogout}>Logout</button>
      {msg && msg}
      {auth ? 'Logged In' : 'Logged Out'}
    </>
  );
}

export default LogoutBtn;