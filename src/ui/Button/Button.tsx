import { FC } from 'react';
import { S } from './Button.styles';

type ButtonProps = {
  label: string;
  onClick?: () => void;
};

const Button: FC<ButtonProps> = ({ label, onClick }) => {
  return <S.Button onClick={onClick}>{label}</S.Button>;
};

export default Button;
