import BaseApi from '../base.api.ts';
import { GetProductsDto } from '../../types/dto/products/get-products.dto.ts';

class ProductsApi {
  constructor(private readonly baseApi: BaseApi) {}

  private readonly baseUrl = '/products';

  getProducts = async () => {
    const url = `${this.baseUrl}`;
    const { data } = await this.baseApi.get<GetProductsDto>(url);
    return data;
  };
}

export default ProductsApi;
