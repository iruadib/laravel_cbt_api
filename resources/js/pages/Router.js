import React, { lazy, Suspense, useEffect, useRef, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import NotFound from './NotFound';
import Navbar from "../components/Navbar";
import styles from './router.module.scss';

const App = lazy(() => import('./App/index'));
const Login = lazy(() => import('./Login'));
const Signup = lazy(() => import('./Signup'));
const Upload = lazy(() => import('./Upload'));
const Rename = lazy(() => import('./Rename'));
const Delete = lazy(() => import('./Delete'));

const AuthRoutesHandler = ({ auth }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const hasPreviouseState = location.key !== 'default';

  useEffect(() => {
    if (auth) {
      if (hasPreviouseState) {
        navigate(-1);
      } else {
        navigate("/");
      }
    }
  }, []);
};

const Router = () => {
  const [auth, setAuth] = useState(false);
  const [id, setId] = useState("");
  const navBarRef = useRef(null);
  const contRef = useRef(null);

  window.addEventListener('beforeunload', (e) => {
    e.preventDefault();
    localStorage.clear();
  });

  const handleAuth = (auth) => {
    setAuth(auth);
  }

  const handleId = (id) => {
    setId(id);
  }
  useEffect(() => {
    if (navBarRef.current && contRef.current) {
      const height = navBarRef.current.offsetHeight;
      contRef.current.style.top = `${height}px`;
    }
  }, [auth]);
  return (
    <Suspense fallback={'Loading...'}>
      <BrowserRouter>
        <Navbar handleAuth={handleAuth} handleId={handleId} auth={auth} innerRef={navBarRef} />
        <div className={styles.wrapper} ref={contRef}>
          <Routes>
            <Route path="/" element={auth ? <App id={id} /> : <Navigate to="/login" />} />
            <Route path="/login" element={auth ? <AuthRoutesHandler auth={auth} /> : <Login />} />
            <Route path="/signup" element={auth ? <AuthRoutesHandler auth={auth} /> : <Signup />} />
            <Route path="/upload" element={auth ? <Upload /> : <Navigate to="/login" />} />
            <Route path="/delete" element={auth ? <Delete /> : <Navigate to="/login" />} />
            <Route path="/rename" element={auth ? <Rename /> : <Navigate to="/login" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  )
}

export default Router;