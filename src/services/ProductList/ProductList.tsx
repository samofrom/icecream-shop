import { FC, useEffect } from 'react';

import { S } from './ProductList.styles.ts';
import { useProductList } from '../../api/hooks/products/useProductList.ts';
import Product from '../../ui/Product/Product.tsx';
import Button from '../../ui/Button/Button.tsx';
import { useLocalStorage } from '../../hooks/useLocalStorage.ts';
import { ProductType } from '../../types/dto/products/products';

const ProductList: FC = () => {
  const { response, getProducts } = useProductList();

  const { value: productCart, setItem } = useLocalStorage<ProductType[]>(
    'productCart',
    []
  );

  useEffect(() => {
    (async () => {
      await getProducts();
    })();
  }, []);

  return (
    <S.ProductList>
      {response &&
        response.products.map((product) => (
          <Product
            key={product.id}
            {...product}
            Button={
              <Button
                label={'В корзину'}
                onClick={() => setItem([...productCart, product])}
              />
            }
          />
        ))}
    </S.ProductList>
  );
};

export default ProductList;
