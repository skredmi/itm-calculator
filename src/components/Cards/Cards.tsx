import { FC, ReactNode } from "react";
import styles from "./Cards.module.css";

interface ICardsProps {
  children: ReactNode;
}

export const Cards: FC<ICardsProps> = ({ children }) => {
  return <section className={styles.cards}>{children}</section>;
};
