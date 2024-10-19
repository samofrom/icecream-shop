import { FC } from 'react';
import { S } from './Cart.styles';

import CartSVG from '../../assets/images/svg/cart.svg?react';
import ItemCount = S.ItemCount;
import Typography from '../Typography/Typography.tsx';
import { formatPrice } from '../../helpers/util.ts';

type CartProps = {
  totalPrice: number;
  itemCount: number;
  onClick: () => void;
};

const Cart: FC<CartProps> = ({ totalPrice, itemCount, onClick }) => {
  return (
    <S.Cart>
      {Boolean(totalPrice) && (
        <Typography variant={'bodyM'}>
          {formatPrice(totalPrice)} <span>₽</span>
        </Typography>
      )}
      <S.CartContainer onClick={onClick}>
        <CartSVG />
        {Boolean(itemCount) && <ItemCount>{itemCount}</ItemCount>}
      </S.CartContainer>
    </S.Cart>
  );
};

export default Cart;
