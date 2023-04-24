import { FC } from "react";
import { Card } from "../ui/Card/Card";
import { Input } from "../ui/Input/Input";

interface ICardWithInputProps {
  index: number;
  title: string;
  name: string;
  unit: string;
  placeholder: string;
}

export const CardWithInput: FC<ICardWithInputProps> = ({
  index,
  title,
  name,
  unit,
  placeholder,
}) => {
  return (
    <Card index={index} title={title}>
      <Input type="number" name={name} unit={unit} placeholder={placeholder} />
    </Card>
  );
};
