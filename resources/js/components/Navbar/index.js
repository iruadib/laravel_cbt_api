import axios from 'axios';
import Cookies from 'js-cookie';
import { useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './style.module.scss';

const Navbar = ({ handleAuth, handleId, auth }) => {
  const location = useLocation();
  const navBar = useRef(null);
  window.onscroll = () => {
    if (document.body.scrollTop > 55 || document.documentElement.scrollTop > 55) {
      navBar.current.classList.add(styles.present);
    } else {
      navBar.current.classList.remove(styles.present);
    }
  }
  useEffect(() => {
    const controller = new AbortController();

    axios.interceptors.request.use((config) => {
      let token = Cookies.get('access_token');
      config.headers.Authorization = token && `Bearer ${token}`;
      return config;
    });
    axios.get('/api/auth').then(res => {
      if (res.status === 200) {
        handleId(res.data.uuid);
        handleAuth(true);
      }
    }).catch(err => {
      handleAuth(false);
      handleId("");
    });

    return () => controller.abort();
  }, [location]);
  return (
    auth && (
      <div className={styles.navbar} ref={navBar}>
        <div className={styles.cont}>
            <ul>
              <li><a href="#">ヴァイオレット・エヴァーガーデン</a></li>
            </ul>
            <ul>
              <li>
                <NavLink className={({ isActive }) => isActive ? styles.active : ''} end to="/">Home</NavLink>
              </li>
              <li>
                <NavLink className={({ isActive }) => isActive ? styles.active : ''} end to="/upload">Upload</NavLink>
              </li>
              <li>
                <NavLink className={({ isActive }) => isActive ? styles.active : ''} end to="/rename">Rename</NavLink>
              </li>
              <li>
                <NavLink className={({ isActive }) => isActive ? styles.active : ''} end to="/delete">Delete</NavLink>
              </li>
            </ul>
        </div>
      </div>
    )
  );
}

export default Navbar;