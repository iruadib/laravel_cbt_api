import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.scss';

const NotFound = () => {
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      document.title = "404 - Page Not Found | React App";
    }
    return () => {
      isMounted = false;
    }
  });
  return (
    <div className={styles.parent}>
      <div className={styles.cont}>
        <img src="/img/notfound.svg" className={styles.img} />
        <p className={styles.text}>
          Looks like you've followed a broken link or entered a URL that doesn't exist on this site.
          <br />
          <Link to="/" className={styles.back}>{" "}Back to our site</Link>
        </p>
      </div>
    </div>
  );
}

export default NotFound;