import { FC } from 'react';
import { S } from './Input.styles';

type InputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
};

const Input: FC<InputProps> = ({ value, onChange, placeholder }) => {
  return (
    <S.Input
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
    />
  );
};

export default Input;
