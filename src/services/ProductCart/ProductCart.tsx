import { FC } from 'react';
import Cart from '../../ui/Cart/Cart.tsx';
import { useLocalStorage } from '../../hooks/useLocalStorage.ts';
import { ProductType } from '../../types/dto/products/products';

const ProductCart: FC = () => {
  const { value: productCart, setItem } = useLocalStorage<ProductType[]>(
    'productCart',
    []
  );

  const totalPrice = productCart.reduce((prev, curr) => prev + curr.cost, 0);

  return (
    <Cart
      totalPrice={totalPrice}
      itemCount={productCart.length}
      onClick={() => setItem([])}
    />
  );
};

export default ProductCart;
