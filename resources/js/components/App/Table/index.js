import axios from "axios";
import React, { useEffect,  useState } from "react";
import { Link } from "react-router-dom";
import styles from './style.module.scss';

const Table = ({ id }) => {
  const [files, setFiles] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [more, setMore] = useState(true);
  const [click, setClick] = useState(false);
  const [error, setError] = useState("");

  const handleMore = (e) => {
    e.preventDefault();
    if (!loading) {
      setClick(true);
    }
  }

  useEffect(() => {
    const controller = new AbortController();
    
    if (click) {
      setLoading(true);
      axios.get(`/api/view?page=${page}&skip=3`).then(res => {
        setFiles(prev => [...prev, ...res.data]);
        setMore(res.data.length > 0 && (res.data.length < 3 ? false : true));
        setPage(prev => prev + 1);
        setLoading(false);
        setClick(false);
      }).catch(err => {
        setClick(false);
        setLoading(false);
        if (err.response.status === 401) {
          setError("Something went wrong, please refresh your tab!");
        }
        // console.log(err.response);
      });
    }

    return () => {
      controller.abort();
    }
  }, [click]);
  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      axios.get(`/api/view?page=${page}&skip=3`).then(res => {
        setFiles(prev => [...prev, ...res.data]);
        setMore(res.data.length > 0 && (res.data.length < 3 ? false : true));
        setLoading(false);
        setPage(prev => prev + 1);
        setClick(false);
      }).catch(err => {
        setClick(false);
        setLoading(false);
        if (err.response.status === 401) {
          setError("Something went wrong, please refresh your tab!");
        }
        // console.log(err.response);
      });
    }

    return () => {
      isMounted = false;
    }
  }, []);
  return (
    <div className={styles.parent}>
      <div className={styles.cont}>
        {files.length > 0 ?
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">File Name</th>
                <th scope="col">Owner</th>
                <th scope="col">Uploaded At</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {files.map((file, i) => (
                <tr key={file.title}>
                  <td>{i + 1}</td>
                  <td>
                    <a className={styles.preview} href={`/api/file/${encodeURIComponent(file.title)}`}>
                      {file.name}.{file.ext}
                    </a>
                  </td>
                  <td>{file.owner} ({file.owner_id === id ? 'saya' : 'bukan saya'})</td>
                  <td><span className={styles.date}>{new Date(file.created_at).toLocaleString()}</span></td>
                  <td>
                    {file.owner_id === id &&
                      <>
                        <Link to={`rename?id=${encodeURIComponent(file.name + '.' + file.ext)}`} className={styles.rename}>Rename</Link>
                        <Link to={`delete?id=${encodeURIComponent(file.name + '.' + file.ext)}`} className={styles.del}>
                          <svg className={styles.svg} viewBox="0 0 24 24">
                            <path fill="currentColor" d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" />
                          </svg>
                        </Link>
                      </>
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table> :
          <>There's no file!</>
        }
      </div>
      {loading &&
        <p className={styles.loading}>Loading...</p>
      }
      {error &&
        <p className={styles.error}>{error}</p>
      }
      {more &&
        <div className={styles.loadcont}>
          <a href="/loadmore" onClick={handleMore} className={styles.more}>load more</a>
        </div>
      }
    </div>
  );
}

export default Table;