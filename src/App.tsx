import { FC } from "react";

import styles from "./App.module.css";
import { Calculator } from "./components/Calculator/Calculator";
import { Result } from "./components/Result/Result";

export const App: FC = () => {
  return (
    <>
      <div className={styles.calculatorContainer}>
        <Calculator />
      </div>
      <div className={styles.resultContainer}>
        <Result />
      </div>
    </>
  );
};
