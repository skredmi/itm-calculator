import { FC } from "react";
import styles from "./GenderCard.module.css";
import { Card } from "../ui/Card/Card";
import { Button } from "../ui/Button/Button";
import { ManSvg, WomanSvg } from "../../assets/svg";

export const GenderCard: FC = () => {
  return (
    <Card index={1} title="What is your gender?">
      <div className={styles.controls}>
        <Button className={styles.buttonContainer}>
          <ManSvg />
          <span className={styles.button}>Man</span>
        </Button>
        <Button className={styles.buttonContainer}>
          <WomanSvg />
          <span className={styles.button}>Woman</span>
        </Button>
      </div>
    </Card>
  );
};
