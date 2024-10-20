import { FC } from 'react';
import { S } from './Button.styles';

import CartSVG from '../../assets/images/svg/cart.svg?react';

type ButtonProps = {
  label: string;
  onClick?: () => void;
};

const Button: FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <S.Button onClick={onClick}>
      <S.Icon>
        <CartSVG />
      </S.Icon>
      <S.Label>{label}</S.Label>
    </S.Button>
  );
};

export default Button;
