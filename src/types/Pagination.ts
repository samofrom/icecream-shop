export type Pagination = Record<'page', PaginationProps>;

export type PaginationProps = {
  offset: number;
  limit: number;
  total: number;
};
