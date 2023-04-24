import { FC, ReactNode } from "react";
import classnames from "classnames";
import styles from "./Card.module.css";

interface ICardProps {
  index: number;
  title: string;
  children: ReactNode;
  error?: boolean;
  className?: string;
}

export const Card: FC<ICardProps> = ({
  index,
  title,
  children,
  error,
  className,
}) => {
  const blockClass = classnames(styles.card, className, {
    [styles.error]: error,
  });

  return (
    <div className={blockClass}>
      <p className={styles.index}>{index}</p>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  );
};
