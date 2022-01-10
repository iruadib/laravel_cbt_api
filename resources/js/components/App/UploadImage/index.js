import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Backdrop from "../../Backdrop";
import styles from './style.module.css';

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      type: 'string',
      duration: 0.15,
      damping: 35,
      stiffness: 500,
    }
  },
  exit: {
    y: '100vh',
    opacity: 0,
  }
}

const UploadImage = ({ handleClose, open,  handleImg }) => {
  const inputFile = useRef(null);

  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const [msg, setMsg] = useState("");

  const handleUpload = (e) => {
    e.preventDefault();
    inputFile.current.click();
  }

  const handleDefault = (e) => {
    e.preventDefault();
    e.stopPropagation();
  }

  const handleDrop = (e) => {
    handleDefault(e);
    setLoading(false);
    setErrors([]);
    setMsg("");
    setProgress(0);
    if (e.dataTransfer.files[0]) {
      const file = new DataTransfer();
      file.items.add(e.dataTransfer.files[0]);

      const name = file.files[0].name;
      if (name !== fileName) {
        const data = file.files[0];
        setFile(data);
        setFileName(name);
      } else {
        setErrors(['File already selected!']);
      }
    } else {
      setErrors(['Something went wrong, please try again']);
    }
  }

  const handleChange = (e) => {
    handleDefault(e);
    setLoading(false);
    setErrors([]);
    setMsg("");
    setProgress(0);
    if (e.currentTarget.value && e.currentTarget.files[0]) {
      const name = e.currentTarget.value.replace(/C:\\fakepath\\/i, '');
      if (name !== fileName) {
        const data = e.currentTarget.files[0];
        setFile(data);
        setFileName(name);
      } else {
        setErrors(['File already selected!']);
      }
    } else {
      setErrors(['Something went wrong, please try again']);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    let formData = new FormData();
    formData.append('profile', file);
    axios.post('/api/profile', formData, {
      onUploadProgress: e => {
        const { loaded, total } = e;
        const progress = Math.round(loaded / total * 100);
        setProgress( progress < 100 ? progress : 99);
      }
    }).then(res => {
      setProgress(100);
      setMsg("Image saved!");
      handleImg(res.data.message);
    }).catch(err => {
      if (err.response.status == 400) {
        setProgress(99);
        return setErrors(err.response.data.profile);
        // return console.log(err.response);
      } 
      return setErrors(['Something went wrong, please try again!']);
    });
  }
  return (
    <>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {open &&
          <Backdrop onClick={handleClose}>
            <motion.div 
              onClick={e => e.stopPropagation()} 
              className={styles.modal}
              variants={dropIn}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className={styles.card}>
                <form 
                  action={`/${String.fromCharCode(65 + Math.floor(Math.random() * 26)) + Date.now() + (Math.random() * 901)}`} 
                  method="post" 
                  onSubmit={handleSubmit}
                >
                  <div className={styles.card}>
                    <p className={styles.title}>Upload Profile</p>
                    <div className={styles.drag} onDrop={handleDrop} onDragEnter={handleDefault} onDragOver={handleDefault}>
                      <img src="/img/upload_vector.svg" alt="" className={styles.img} />
                      <input type="file" onChange={handleChange} ref={inputFile} accept="image/*"/>
                      <div>
                        <p onClick={handleUpload} className={styles.click}>select an image</p>
                      </div>
                    </div>
                    {fileName && 
                      <p className={styles.desc}>
                        {fileName && <span className={styles.val}>{fileName}</span>}
                        {loading &&
                          <>
                            {" "}
                            <span className={styles.progress}>({progress}%)</span>
                          </>
                        }
                      </p>
                    }
                    <button type="submit" className={styles.btn}>Submit</button>
                    <button type="button" onClick={handleClose} className={styles.back}>close</button>
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
                </form>
              </div>
            </motion.div>
          </Backdrop>
        }
      </AnimatePresence>
    </>
  );
}

export default UploadImage;