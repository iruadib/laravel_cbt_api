import React, { lazy, Suspense, useEffect, useState } from "react";
import styles from './style.module.scss';
import UploadImage from "../../components/App/UploadImage";
import Profile from "../../components/App/Profile";
import TableSkeleton from "../../components/Skeleton/Table";

const Table = lazy(() => import('../../components/App/Table'));

const App = ({ id }) => {
  const [open, setOpen] = useState(false);
  const [img, setImg] = useState("");

  const handleImg = (img) => setImg(img);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      document.title = 'Dashboard | React App';
    }
    return () => {
      isMounted = false;
    }
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className={styles.parent}>
      <Profile handleOpen={open ? handleClose : handleOpen} handleImg={handleImg} img={img} />
      <UploadImage handleClose={handleClose} open={open} handleImg={handleImg} />
      <Suspense fallback={<TableSkeleton />}>
        <Table id={id} />
      </Suspense>
    </div>
  );
}

export default App;