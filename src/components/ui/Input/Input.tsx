import { ChangeEvent, FC } from "react";
import classnames from "classnames";
import styles from "./Input.module.css";

interface IInputProps {
  unit: string;
  name: string;
  type: string;
  value?: number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  error?: boolean;
}

export const Input: FC<IInputProps> = ({
  unit,
  name,
  type,
  value,
  onChange,
  placeholder,
  error,
}) => {
  const blockClass = classnames(styles.input, {
    [styles.error]: error,
  });

  return (
    <div className={styles.container}>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={blockClass}
      />
      <span className={styles.span}>{unit}</span>
    </div>
  );
};
