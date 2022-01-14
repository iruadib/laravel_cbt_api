import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import App from './App/index';
import Beta from "./Beta";
import Delete from "./Delete";
import Login from "./Login/index";
import NotFound from './NotFound/index';
import Rename from "./Rename";
import Signup from "./Signup";
import Upload from "./Upload";
import Navbar from "../components/Navbar";
import styles from './router.module.scss';

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
  const navBarRef = useRef(null);
  const contRef = useRef(null);

  const handleAuth = (auth) => {
    setAuth(auth);
  }

  const handleId = (id) => {
    setId(id);
  }
  useEffect(() => {
    const height = navBarRef.current.offsetHeight;
    contRef.current.style.top = `${height}px`;
  }, []);
  return (
    <BrowserRouter>
      <Navbar handleAuth={handleAuth} handleId={handleId} auth={auth} innerRef={navBarRef} />
      <div className={styles.wrapper} ref={contRef}>
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
      </div>
    </BrowserRouter>
  )
}

export default Router;