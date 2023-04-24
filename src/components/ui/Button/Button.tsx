import { FC, ReactNode } from "react";
import classnames from "classnames";
import styles from "./Button.module.css";

interface IButtonProps {
  children: ReactNode;
  isFullWidth?: boolean;
  theme?: string;
  className?: string;
}

export const Button: FC<IButtonProps> = ({
  children,
  isFullWidth,
  theme,
  className,
}) => {
  const blockClass = classnames(styles.button, className, {
    [styles.colorMain]: theme === "main",
    [styles.colorSecondary]: theme === "secondary",
    [styles.fullWidth]: isFullWidth,
  });

  return <button className={blockClass}>{children}</button>;
};
