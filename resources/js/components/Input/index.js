import React, { Fragment } from "react";
import styles from './style.module.scss';
import components from '../components.module.scss';

const Input = ({ type, icon, className, error, placeholder, ...props }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const type = e.currentTarget.nextElementSibling.getAttribute('type');
    if (type === 'password') {
      e.currentTarget.nextSibling.setAttribute('type', 'text');
    } else {
      e.currentTarget.nextSibling.setAttribute('type', 'password');
    }
  }
  return (
    <>
      <div className={`${styles.cont} ${components['grid-12']}`}>
        {icon ?
          <>
            <span className={`${styles.form} ${components['col-1']}`}>
              {type === 'text' ?
                <svg className={styles.svg} viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
                </svg> :
                <svg className={styles.svg} viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z" />
                </svg>
              }
            </span>
            <div className={`${styles.subcont} ${components['col-11']}`}>
              {type === 'password' &&
                <a href="" onClick={handleClick} className={styles.eye}>
                  <svg className={styles.svg} viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" />
                  </svg>
                </a>
              }
              <input type={type} className={`${styles.input} ${components['col-12']} ${className}`} placeholder={placeholder} {...props} />
              <label className={styles["control-label"]} htmlFor="input">{placeholder}</label>
              <i className={styles.bar}></i>
              <span className={styles["input-error"]}>{Array.isArray(error) ? error.map((msg, i) => (<Fragment key={i}>{msg}</Fragment>)) : error}</span>
            </div>
          </> :
          <>
            <div className={`${styles.subcont} ${components['col-12']}`}>
              <input type={type} className={`${styles.input} ${components['col-12']} ${className}`} placeholder={placeholder} {...props} />
              <label className={styles["control-label"]} htmlFor="input">{placeholder}</label>
              <i className={styles.bar}></i>
              <span className={styles["input-error"]}>
                {
                  Array.isArray(error) ? error.map((msg, i) => (
                  <Fragment key={i}>{msg}</Fragment>)
                  ) : 
                  error
                }
              </span>
            </div>
          </>
        }
        
      </div>
    </>
  );
}

export default Input;