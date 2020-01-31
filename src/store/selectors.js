import { splitEvery } from 'csssr-school-utils';
import { getPrice } from '../utils';

export const getFilteredProduct = (items, minPrice, maxPrice, discount, category) => {
  let products = items;

  if (category) {
    products = items.filter(item => item.category === category);
  }

  products = products.filter(
    item => getPrice(item.price) >= minPrice && getPrice(item.price) <= maxPrice * (1 - discount / 100)
  );

  return products;
};

export function getPagination({ products, minPrice, maxPrice, discount, activeCategory, numberPage }) {
  const i = getFilteredProduct(products, minPrice, maxPrice, discount, activeCategory);
  const arr = splitEvery(numberPage, i);

  return arr;
}
