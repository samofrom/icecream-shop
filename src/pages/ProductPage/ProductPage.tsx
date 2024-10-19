import { FC } from 'react';

import Page from '../../ui/Page/Page.tsx';
import Logo from '../../ui/Logo/Logo.tsx';

import ProductList from '../../services/ProductList/ProductList.tsx';
import ProductCart from '../../services/ProductCart/ProductCart.tsx';
import PoweredBy from '../../ui/PoweredBy/PoweredBy.tsx';

const ProductPage: FC = () => {
  return (
    <Page
      Header={
        <>
          <Logo companyName={'ProductStore'} />
          <ProductCart />
        </>
      }
      Content={<ProductList />}
      Footer={<PoweredBy />}
    />
  );
};

export default ProductPage;
