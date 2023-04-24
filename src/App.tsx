import { FC } from "react";
import { Header } from "./components/Header/Header";
import styles from "./App.module.css";
import { Cards } from "./components/Cards/Cards";
import { GenderCard } from "./components/GenderCard/GenderCard";
import { CardWithInput } from "./components/CardWithInput/CardWithInput";

export const App: FC = () => {
  return (
    <div className={styles.container}>
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
    </div>
  );
};
