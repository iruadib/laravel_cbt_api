import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Input from "../../components/Input";
import styles from './style.module.scss';

const Rename = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [rename, setRename] = useState("");
  const [id, setId] = useState("");
  const [form, setForm] = useState({});
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
  useEffect(() => {
    const controller = new AbortController();
    setForm({
      name: id,
      rename
    });
    return () => {
      controller.abort();
    }
  }, [rename, id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      if (rename.trim()) {
        setLoading(true);
        setErr("");
        setMsg("")
        axios.put('/api/file', form).then(res => {
          setLoading(false);
          setMsg(res.data.message);
        }).catch(err => {
          setLoading(false);
          if (err.response.status !== 400) {
            if (err.response.status !== 500) {
              return setErr(err.response.data.message);
            }
            return setErr("Something went wrong, please try again!");
          }
          setErr("Please pay attention to the name of the file and rename(min 6 characters) before sending!")
        });
      } else {
        setErr("Please name it!");
      }
    } else {
      setErr("Please select a file you wanna delete!");
    }
  }
  return (
    <div className={styles.parent}>
      <form action={`/${String.fromCharCode(65 + Math.floor(Math.random() * 26)) + Date.now() + (Math.random() * 901)}`} onSubmit={handleSubmit}>
        <div className={styles.modal}>
          <div className={styles.card}>
            <p className={styles.title}>rename file</p>
            <div className={styles.txt}>
              <div className="f-rename-txt-cont">
                change file name from "<span>{encodeURIComponent(id)}</span>" to
              </div>
            </div>
            <Input 
              type="text" 
              placeholder="rename" 
              value={rename}
              onChange={e => setRename(e.currentTarget.value)}
              required
            />
            <button type="submit" className={styles.btn}>submit</button>
            <Link to="/" className={styles.btn}>back</Link>
            {loading &&
              <p className={styles.loading}>{loading}</p>
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

export default Rename;