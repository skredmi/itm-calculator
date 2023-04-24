import { FC } from "react";
import { Header } from "./components/Header/Header";
import styles from "./App.module.css";
import { Card } from "./components/ui/Card/Card";
import { Cards } from "./components/Cards/Cards";

export const App: FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Cards>
        <Card index={1} title="What is your gender?">
          Card 1
        </Card>
        <Card index={2} title="What's your age?">
          Card 2
        </Card>
        <Card index={3} title="How tall are you?">
          Card 3
        </Card>
        <Card index={4} title="What's your weight?">
          Card 4
        </Card>
      </Cards>
    </div>
  );
};
