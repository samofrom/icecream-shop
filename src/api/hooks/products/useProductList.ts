import { useApi } from '../useApi.ts';
import { useRequest } from '../useRequest.ts';

export function useProductList() {
  const { products } = useApi();
  const { response, makeRequest, ...other } = useRequest(products.getProducts);

  return { response, getProducts: makeRequest, ...other };
}
