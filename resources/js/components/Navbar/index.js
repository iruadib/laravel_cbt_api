import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './style.module.scss';
const Navbar = () => {
  const navBar = useRef(null);
  window.onscroll = () => {
    if (document.body.scrollTop > 55 || document.documentElement.scrollTop > 55) {
      navBar.current.classList.add(styles.present);
    } else {
      navBar.current.classList.remove(styles.present);
    }
  }
  return (
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
  );
}

export default Navbar;