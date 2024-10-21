import { FC, useState } from 'react';

import Page from '../../ui/Page/Page.tsx';
import Logo from '../../ui/Logo/Logo.tsx';

import ProductList from '../../services/ProductList/ProductList.tsx';
import ProductCart from '../../services/ProductCart/ProductCart.tsx';
import PoweredBy from '../../ui/PoweredBy/PoweredBy.tsx';

import Input from '../../ui/Input/Input.tsx';

const ProductPage: FC = () => {
  const [inputValue, setInputValue] = useState<string>('');

  return (
    <Page
      Header={
        <>
          <Logo companyName={'IcecreamShop'} />
          <Input
            value={inputValue}
            onChange={setInputValue}
            placeholder={'Поиск'}
          />

          <ProductCart />
        </>
      }
      Content={<ProductList search={inputValue} />}
      Footer={<PoweredBy />}
    />
  );
};

export default ProductPage;
