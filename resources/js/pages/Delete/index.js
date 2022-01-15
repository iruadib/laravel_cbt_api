import React, { useEffect, useState } from "react";
import styles from './style.module.scss';
import components from '../../components/components.module.scss';
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";

const Delete = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [id, setId] = useState(null);
  const [err, setErr] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setId(searchParams.get('id'));

    return () => {
      controller.abort();
    }
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    setErr("");
    if (id) {
      setLoading(true);
      setMsg("");
      axios.delete(`/api/file/?title=${id}`).then(res => {
        setMsg(res.data.message);
        setLoading(false);
      }).catch(err => {
        setLoading(false);
        if (err.response.status === 400) {
          return setErr(err.response.data.profile[0]);
        }
        if (err.response.status === 404 || err.response.status === 401) {
          return setErr(err.response.data.message);
        }
      });
    } else {
      return setErr("Please select a file you wanna delete!");
    }
  }
  return (
    <div className={styles.parent}>
      <form action={`/${String.fromCharCode(65 + Math.floor(Math.random() * 26)) + Date.now() + (Math.random() * 901)}`}>
        <div className={styles.modal}>
          <div className={styles.card}>
            <p className={styles.title}>delete file</p>
            <div className={styles.txt}>
              are you sure wanna delete "<span>{encodeURIComponent(id)}</span>" ?
            </div>
            <div className={components['grid-12']}>
              <div className={`${styles.subcont} ${components['col-6']}`}>
                <Link to="/" className={`${styles.btn} ${components['col-12']}`}>back</Link>
              </div>
              <div className={`${styles.subcont} ${components['col-6']}`}>
                <Link to={`/delete?id=${id}`} onClick={handleClick} className={`${styles.btn} ${components['col-12']}`}>yes</Link>
              </div>
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
          </div>
        </div>
      </form>
    </div>
  );
}

export default Delete;