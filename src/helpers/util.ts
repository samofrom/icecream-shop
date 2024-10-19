export const formatPrice = (price: number) =>
  price % 1 ? price.toFixed(2) : price;
