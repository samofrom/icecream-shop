import { FC, useEffect, useState } from 'react';
import { S } from './ProductList.styles.ts';

import Product from '../../ui/Product/Product.tsx';
import Button from '../../ui/Button/Button.tsx';
import { useLocalStorage } from '../../hooks/useLocalStorage.ts';
import { ProductType } from '../../types/dto/products/products';

import { useIntersection } from '../../hooks/useIntersection.ts';
import { useProductList } from '../../api/hooks/products/useProductList.ts';
import Typography from '../../ui/Typography/Typography.tsx';

type ProductListProps = {
  search: string;
};

const limit = 10;

const ProductList: FC<ProductListProps> = ({ search }) => {
  const [products, setProducts] = useState<ProductType[]>([]);

  const { response, getProducts, isLoading } = useProductList();

  useEffect(() => {
    (async () => {
      const response = await getProducts({
        search,
        limit,
      });

      if (response) {
        setProducts([...response.products]);
      }
    })();
  }, [search]);

  const onIntersection = async () => {
    const page = response?.page;
    if (page && page.offset + limit < page.total) {
      const response = await getProducts({
        search,
        offset: page.offset + limit,
        limit,
      });

      if (response) setProducts((prev) => [...prev, ...response.products]);
    }
  };

  const { value: productCart, setItem } = useLocalStorage<ProductType[]>(
    'productCart',
    []
  );

  const { ref } = useIntersection({
    threshold: [0],
    onIntersection,
  });

  return (
    <S.ProductList>
      {products.length
        ? products.map((product, index) => (
            <Product
              key={product.id}
              ref={index === products.length - 1 ? ref : null}
              {...product}
              Button={
                <Button
                  label={'В корзину'}
                  onClick={() => setItem([...productCart, product])}
                />
              }
            />
          ))
        : !isLoading && (
            <Typography variant={'h1'}>Ничего не найдено</Typography>
          )}
    </S.ProductList>
  );
};

export default ProductList;
