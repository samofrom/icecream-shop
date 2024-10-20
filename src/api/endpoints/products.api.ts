import BaseApi from '../base.api.ts';
import { GetProductsDto } from '../../types/dto/products/get-products.dto.ts';
import { PaginationProps } from '../../types/Pagination.ts';

type GetProductsParams = {
  search: string;
} & Partial<PaginationProps>;

class ProductsApi {
  constructor(private readonly baseApi: BaseApi) {}

  private readonly baseUrl = '/products';

  getProducts = async ({ search, ...pagination }: GetProductsParams) => {
    const { data } = await this.baseApi.get<GetProductsDto>(this.baseUrl, {
      params: {
        ...(search && {
          title: search,
        }),
        ...(pagination && {
          ...pagination,
        }),
      },
    });
    return data;
  };
}

export default ProductsApi;
