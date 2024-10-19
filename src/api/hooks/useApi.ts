import BaseApi from '../base.api.ts';
import ProductsApi from '../endpoints/products.api.ts';

export function useApi() {
  const baseApi = new BaseApi(`${process.env.API_BASE_URL}`);

  return {
    products: new ProductsApi(baseApi),
  };
}
