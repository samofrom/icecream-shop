import { ProductType } from './products';
import { Pagination } from '../../Pagination.ts';

export type GetProductsDto = {
  products: ProductType[];
} & Pagination;
