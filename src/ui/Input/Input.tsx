import { FC } from 'react';
import { S } from './Input.styles';

type InputProps = {
  value: string;
  onChange: (value: string) => void;
};

const Input: FC<InputProps> = ({ value, onChange }) => {
  return (
    <S.Input value={value} onChange={(event) => onChange(event.target.value)} />
  );
};

export default Input;
