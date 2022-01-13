import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import App from './App/index';
import Beta from "./Beta";
import Delete from "./Delete";
import Login from "./Login/index";
import NotFound from './NotFound/index';
import Rename from "./Rename";
import Signup from "./Signup";
import Upload from "./Upload";
import styles from './style.module.scss';
import Navbar from "../components/Navbar";

const AuthRoutesHandler = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const hasPreviouseState = location.key !== 'default';

  useEffect(() => {
    if (hasPreviouseState) {
      navigate(-1);
    } else {
      navigate("/");
    }
  }, []);
  return <></>
};

const Router = () => {
  const [auth, setAuth] = useState(false);
  const [id, setId] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    axios.interceptors.request.use((config) => {
      let token = Cookies.get('access_token');
      config.headers.Authorization = token && `Bearer ${token}`;
      return config;
    });
    axios.get('/api/auth').then(res => {
      if (res.status === 200) {
        setId(res.data.uuid);
        setAuth(true);
      }
    }).catch(err => {
      setAuth(false);
    });

    return () => {
      controller.abort();
    }
  }, []);
  return (
    <BrowserRouter>
        {auth &&
          <Navbar />
        }
        <Routes>
          <Route path="/" element={auth ? <App id={id} /> : <Navigate to="/login" />} />
          <Route path="/login" element={auth ? <AuthRoutesHandler /> : <Login />} />
          <Route path="/signup" element={auth ? <AuthRoutesHandler /> : <Signup />} />
          <Route path="/upload" element={auth ? <Upload /> : <Navigate to="/login" />} />
          <Route path="/delete" element={auth ? <Delete /> : <Navigate to="/login" />} />
          <Route path="/rename" element={auth ? <Rename /> : <Navigate to="/login" />} />
          <Route path="/beta" element={auth ? <Beta /> : <Navigate to="/login" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router;