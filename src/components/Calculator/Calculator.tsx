import { FC } from "react";
import styles from "./Calculator.module.css";
import { Header } from "../Header/Header";
import { Cards } from "../Cards/Cards";
import { GenderCard } from "../GenderCard/GenderCard";
import { CardWithInput } from "../CardWithInput/CardWithInput";
import { Button } from "../ui/Button/Button";

export const Calculator: FC = () => {
  return (
    <>
      <Header />
      <Cards>
        <GenderCard />
        <CardWithInput
          index={2}
          title="What's your age?"
          name="gender"
          unit="year"
          placeholder="age"
        />
        <CardWithInput
          index={3}
          title="How tall are you?"
          name="tall"
          unit="sm"
          placeholder="height"
        />
        <CardWithInput
          index={4}
          title="What's your weight?"
          name="weight"
          unit="kg"
          placeholder="weight"
        />
      </Cards>
      <Button theme="secondary" isFullWidth className={styles.buttonAdd}>
        calculate your imc
      </Button>
    </>
  );
};
