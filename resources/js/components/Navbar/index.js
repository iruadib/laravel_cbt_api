import axios from 'axios';
import Cookies from 'js-cookie';
import { useEffect, useRef } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import styles from './style.module.scss';

const Navbar = ({ handleAuth, handleId, auth, innerRef }) => {
  const location = useLocation();
  const navBarRef = useRef(null);
  const navigate = useNavigate();
  
  window.onscroll = () => {
    if (document.body.scrollTop > 55 || document.documentElement.scrollTop > 55) {
      navBarRef.current.classList.add(styles.shadow);
    } else {
      navBarRef.current.classList.remove(styles.shadow);
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
  const handleLogout = (e) => {
    e.preventDefault();
    axios.interceptors.request.use((config) => {
      const token = Cookies.get('access_token');
      config.headers.Authorization = token && `Bearer ${token}`;
      return config;
    });
    axios.post('/api/logout').then(res => {
      if (res.status === 200) {
        Cookies.remove('access_token', { expires: 7, sameSite: 'Strict' });
        navigate('/login', { replace: true });
      }
    }).catch(err => {
      if (err) {
        return alert("Failed!");
      }
    });
  }
  return (
    <div className={`${styles.navbar} ${styles.present}`} ref={node => { innerRef.current = node, navBarRef.current = node }}>
      <div className={styles.cont}>
          <ul>
            <li><a href="#">ヴァイオレット・エヴァーガーデン</a></li>
          </ul>
          <ul>
            {auth ?
              <>
                <li>
                  <NavLink className={({ isActive }) => isActive ? styles.active : ''} end to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink className={({ isActive }) => isActive ? styles.active : ''} end to="/upload">Upload</NavLink>
                </li>
                <li>
                  <NavLink className={({ isActive }) => isActive ? styles.active : ''} end to="/logout" onClick={handleLogout}>Logout</NavLink>
                </li>
              </> :
              <>
                <li>
                  <NavLink className={({ isActive }) => isActive ? styles.active : ''} end to="/signup">Signup</NavLink>
                </li>
                <li>
                  <NavLink className={({ isActive }) => isActive ? styles.active : ''} end to="/login">Login</NavLink>
                </li>
              </>
            }
            
          </ul>
      </div>
    </div>
  );
}

export default Navbar;