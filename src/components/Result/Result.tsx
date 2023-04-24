import { FC } from "react";
import styles from "./Result.module.css";

export const Result: FC = () => {
  return (
    <>
      <h1 className={styles.title}>Your personal result</h1>
      <div className={styles.chart}>
        <div className={styles.line}>

          <div className={styles.sticker}>
            <h2 className={styles.stickerTitle}>Your IMC</h2>
            <p className={styles.stickerInfo}>19,3</p>
            <span></span>
          </div>


          <div className={styles.lineSection}>
            <h3>low weight</h3>
            <p>
              <span>0.0 </span>
              <span className={styles.dots}></span>
            </p>
            <span className={styles.weight}>57кг</span>
          </div>

          <div className={styles.lineSection}>
            <h3>normal weight</h3>
            <p>
              <span>19.0 </span>
              <span className={styles.dots}></span>
            </p>
            <span className={styles.weight}>75кг</span>
          </div>

          <div className={styles.lineSection}>
            <h3>overweight</h3>
            <p>
              <span>24.0 </span>
              <span className={styles.dots}></span>
            </p>
            <span className={styles.weight}>89кг</span>
          </div>

          <div className={styles.lineSection}>
            <h3>obesity</h3>
            <p>
              <span>29.0 </span>
              <span className={styles.dots}></span>
            </p>
            <span className={styles.weight}>118кг</span>
          </div>

          <div className={styles.lineSection}>
            <h3>extreme obesity</h3>
            <p>
              <span>39.0 </span>
              <span className={styles.dots}></span>
              <span>+</span>
            </p>
          </div>

        </div>
      </div>
    </>
  );
};
