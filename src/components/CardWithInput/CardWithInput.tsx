import { FC } from "react";
import { Card } from "../ui/Card/Card";
import { Input } from "../ui/Input/Input";

interface ICardWithInputProps {
  index: number;
  title: string;
  name: string;
  unit: string;
  placeholder: string;
  error?: boolean;
}

export const CardWithInput: FC<ICardWithInputProps> = ({
  index,
  title,
  name,
  unit,
  placeholder,
  error,
}) => {
  return (
    <Card index={index} title={title} error={error}>
      <Input type="number" name={name} unit={unit} placeholder={placeholder} error={error} />
    </Card>
  );
};
