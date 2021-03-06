import axios from "axios";
import React, { useEffect, useState } from "react";
import Input from "../../components/Input";
import styles from './style.module.scss';
import components from '../../components/components.module.scss';
import { Link, useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");
  const [localLoc, setLocalLoc] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const hasPreviousState = location.key !== 'default';
  
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      document.title = "Login Form | React App";
      const loc = localStorage.getItem('location');
      setLocalLoc(loc);
    }
    return () => {
      isMounted = false;
    }
  }, []);

  useEffect(() => {
    setForm({
      email,
      password,
    });
  }, [email, password]);

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    setErr("");
    axios.defaults.withCredentials = true;
    axios.get('/sanctum/csrf-cookie').then(res => {
      setMsg("");
      setError({});
      axios.post('/api/login', new URLSearchParams(form), { withCredentials: true })
      .then(res => {
        if (res.status === 200) {
          setLoading(false);
          setMsg("Success!");
          Cookies.set('access_token', res.data.access_token, { expires: 1, sameSite: 'Strict' });
          navigate(!localLoc ? (hasPreviousState ? -1 : '/') : localLoc, { replace: true });
          localStorage.removeItem('location');
        }
      }).catch(err => {
        setLoading(false);
        if (err.response.status === 400) {
          return setError(err.response.data);
        }
        if (err.response.status === 401) {
          return setErr(err.response.data.message);
        }
        return setErr("Something went wrong, please try again!");
      });
    }).catch(err => {
      setErr("Something went wrong, please try again!");
    });
  }
  return (
    <section className={`${styles.cont} ${components['grid-12']}`}>
      <div className={`${styles.bg} ${components['col-6']}`}>
        <div className={styles['bg-bg']}></div>
        <div className={`${styles['bg-txt']} ${components['col-12']}`}>
          <h1>SMAN 1 Kudus</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
        </div>
        <div className={styles['bg-sns']}>
          <a href="/#">
            <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
          </a>
          <a href="/#">
            <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
          </a>
          <a href="/#">
            <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
        </div>
      </div>
      <div className={`${styles.form} ${components['col-lg-6']} ${components['grid-12']}`}>
        <div className={`${styles['form-cont']} ${components['col-12']}`}>
          <p className={styles.title}>
            Log in to your account
          </p>
          <form className={components['col-12']} onSubmit={handleSubmit} autoComplete="off">
            <Input 
              type="text" 
              onChange={e => setEmail(e.currentTarget.value)} 
              value={email} 
              name="email" 
              placeholder="Email"
              error={error.email}
              icon
              required 
            />
            <Input 
              type="password" 
              onChange={e => setPassword(e.currentTarget.value)} 
              value={password} 
              name="password" 
              placeholder="Password" 
              autoComplete="no" 
              error={error.password}
              icon
              required 
            />
            <div className={styles['b-cont']}>
              <button
                type="submit"
                className={`${styles.button} ${components['col-12']}`}
              >
                Login
              </button>
            </div>
            <div className={styles['form-alt']}>
              <span>Don't have an account? <Link className={styles.alt} to="/signup">Sign up</Link></span>
            </div>
            {loading &&
              <p className={styles.loading}>Loading...</p>
            }
            {msg &&
              <p className={styles.msg}>{msg}</p>
            }
            {err &&
              <p className={styles.error}>{err}</p>
            }
            
            <div className={styles['form-sns']}>
              <a href="#">
                <svg className="fill-current text-black lg:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#">
                <svg className="fill-current text-black lg:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
              <a href="#">
                <svg className="fill-current text-black lg:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;