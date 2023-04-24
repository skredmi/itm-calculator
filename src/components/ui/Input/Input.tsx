import { ChangeEvent, FC } from "react";
import styles from "./Input.module.css";

interface IInputProps {
  unit: string;
  name: string;
  type: string;
  value?: number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export const Input: FC<IInputProps> = ({
  unit,
  name,
  type,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div className={styles.container}>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={styles.input}
      />
      <span className={styles.span}>{unit}</span>
    </div>
  );
};
