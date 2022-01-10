import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import styles from './style.module.scss';
import { Link } from "react-router-dom";

const Upload = () => {
  const [file, setFile] = useState([]);
  const [fileName, setFileName] = useState([]);
  const [error, setError] = useState("");
  const inputFile = useRef(null);
  const fileDesc = useRef(null);
  const fileProgress = useRef(null);
  const [progress, setProgress] = useState(0);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      document.title = 'Upload Form | React App';
    }
    return () => {
      isMounted = false;
    }
  }, []);
  
  const handleUpload = (e) => {
    e.preventDefault();
    inputFile.current.click();
  }
  const handleChange = (e) => {
    e.preventDefault();
    setError("");
    if (e.currentTarget.value && e.currentTarget.files[0]) {
      if (fileName.length < 4 && file.length < 4) {
        const value = e.currentTarget.value.replace(/C:\\fakepath\\/i, '');
        if (fileName.indexOf(value) === -1) {
          const data = e.currentTarget.files[0];
          setFileName(prev => [...prev, value]);
          setFile(prev => [...prev, data]);
          fileDesc.current.classList.add(styles.show);
        } else {
          setError("File already selected!");
        }
      } else {
        setError("Maximum 3 files that can be selected!");
      }
    } else {
      setError("Something went wrong, please try again!");
    }
  }

  const handleDefault = (e) => {
    e.preventDefault();
    e.stopPropagation();
  }
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // console.log(e.dataTransfer.files[0]);
    setError("");
    if (e.dataTransfer.files[0]) {
      if (fileName.length < 4 && file.length < 4) {
        const file = new DataTransfer();
        file.items.add(e.dataTransfer.files[0]);
        const value = file.files[0].name;
        if (fileName.indexOf(value) === -1) {
          const data = file.files[0];
          setFileName(prev => [...prev, value]);
          setFile(prev => [...prev, data]);
          fileDesc.current.classList.add(styles.show);
        } else {
          setError("File already selected!");
        }
      } else {
        setError("Maximum 3 files that can be selected!");
      }
    } else {
      setError("Something went wrong, please try again!");
    }
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    file.forEach((data, i) => {
      formData.append(`file-${i + 1}`, data);
    });
    // console.log(formData.values);
    setMsg("");
    setError("");
    setProgress(0);
    fileProgress.current.classList.remove(styles.hide);
    axios.post('/api/upload', formData, 
    {
      onUploadProgress: e => {
        const { loaded, total } = e;
        const progress = Math.round(loaded / total * 100);
        setProgress( progress < 100 ? progress : 99);
      }
    }).then(res => {
      // console.log(res.data);
      setProgress(100);
      setMsg("File saved!");
    }).catch(err => {
      fileProgress.current.classList.add(styles.hide);
      setProgress(0);
      // console.log(err.response.data.message);
      setError(err.response.data.message);
    });
  }
  // useEffect(() => {
  //   console.log(progress);
  // }, [progress]);
  return (
    <div className={styles.parent}>
      <form action={`/${String.fromCharCode(65 + Math.floor(Math.random() * 26)) + Date.now() + (Math.random() * 901)}`} method="post" onSubmit={handleSubmit}>
        <div className={styles.modal}>
          <div className={styles.card}>
            <p className={styles.title}>Upload File</p>
            <div className={styles.drop} onDrop={handleDrop} onDragOver={handleDefault} onDragEnter={handleDefault}>
              <img src="/img/upload_vector.svg" alt="" />
              <input type="file" onChange={handleChange} ref={inputFile}/>
              <div>
                <a href="" onClick={handleUpload} className={styles.click}>select file</a>
              </div>
            </div>
            <p className={styles.desc} ref={fileDesc}>
              <span className={styles.val}>
                {fileName.map((val, i) => (
                  i < (fileName.length - 1) ? <span key={val}>{val}, </span> : <span key={val}>{val}.</span>
                ))}  
              </span> 
              {" "} 
              <span className={`${styles.progress} ${styles.hide}`} ref={fileProgress}>({`${progress}%`})</span></p>
            <button type="submit" className={styles.btn}>Submit</button>
            <Link to="/"  className={styles.back}>back</Link>
            {msg && 
              <p className={styles.msg}>{msg}</p>
            }
            {error && 
              <p className={styles.error}>{error}</p>
            }
          </div>
        </div>
      </form>
    </div>
  );
}

export default Upload;