import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from './style.module.scss';
import components from '../../components.module.scss';
import axios from "axios";
import Cookies from "js-cookie";

const Profile = ({ handleOpen, img, handleImg }) => {
  const [msg, setMsg] = useState("");
  const [errors, setErrors] = useState([]);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (msg) {
      setTimeout(() => {
        setMsg("");
      }, 5000);
    }
    if (errors.length > 0) {
      setTimeout(() => {
        setErrors([]);
      }, 5000);
    }
  }, [msg, errors]);

  const handleLogout = (e) => {
    e.preventDefault();
    setErrors([]);
    setMsg("");
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
      setErrors(["Failed!"]);
    });
  }
  useEffect(() => {
    const controller = new AbortController();
    axios.get('/api/profile').then(res => {
      setName(res.data.name);
      return handleImg(res.data.message);
    }).catch(err => {
      if (err.response.status === 404) {
        setName(err.response.data.name);
        return handleImg("default.png");
      }
    });

    return () => {
      controller.abort();
    }
  }, []);
  const handleDelete = (e) => {
    e.preventDefault();
    setErrors([]);
    setMsg("");
    axios.delete('/api/profile').then(res => {
      handleImg('default.png');
      setMsg("Image has been deleted!");
    }).catch(err => {
      setErrors([err.response.data.message]);
    });
  }
  return (
    <div className={styles.parent}>
      <div className={components['col-12']}>
        <div className={styles.cont}>
          {(img && name) &&
             <img 
              alt={`${name}'s Profile`}
              src={`storage/profile/${img}`} 
              className={styles.upload}
            />
          }
          <div onClick={handleOpen} className={styles.edit} title="Edit Your Photo"><span>Edit Profile</span></div>
        </div>
      </div>
      <div className={`${components['col-12']} ${styles.name}`}>
        <span>{name}</span>
      </div>
      <div className={`${styles.action} ${components['col-12']}`}>
        <Link to="/delete" className={styles.btn} onClick={handleDelete} >Delete Profile</Link>
      </div>
      {msg && 
        <p className={styles.msg}>{msg}</p>
      }
      {errors.length > 0 &&
        <p className={styles.error}>
          {errors.map((error, i) => (
            i + 1 === errors.length ? 
            <span>{error}</span> :
            <span>{error}, </span>
          ))}
        </p>
      }
    </div>
  );
}

export default Profile;