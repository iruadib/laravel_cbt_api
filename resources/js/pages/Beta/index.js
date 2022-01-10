import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Backdrop from "../../components/Backdrop";
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
      duration: 0.2,
      damping: 35,
      stiffness: 500,
    }
  },
  exit: {
    y: '100vh',
    opacity: 0,
  }
}

const Beta = () => {
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <button type="button" onClick={open ? handleClose : handleOpen}>open</button>
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
                <form action={`/${String.fromCharCode(65 + Math.floor(Math.random() * 26)) + Date.now() + (Math.random() * 901)}`} method="post">
                  <div className={styles.card}>
                    <p className={styles.title}>Upload Profile</p>
                    <div className={styles.drag}>
                      <img src="/img/upload_vector.svg" alt="" className={styles.img} />
                      <input type="file" accept="image/*"/>
                      <div>
                        <p className={styles.click}>select an image</p>
                      </div>
                    </div>
                    <button type="submit" className={styles.btn}>Submit</button>
                    <button type="button" onClick={handleClose} className={styles.back}>close</button>
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

export default Beta;