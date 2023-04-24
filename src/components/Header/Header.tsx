import { FC } from "react";
import styles from "./Header.module.css";

export const Header: FC = () => {
  return(
    <section className={styles.header}>
        <h1 className={styles.title}>IMC Calculator</h1>
        <p className={styles.description}>For a correct calculation we need some basic information about you</p>
    </section>
  ) 
};
