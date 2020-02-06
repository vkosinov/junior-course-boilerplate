import { createSelector } from 'reselect';

import { splitEvery } from 'csssr-school-utils';
import { getPrice } from '../../utils';

const itemsPerPage = 2;

export const getFilteredProduct = createSelector(
  ({ products }) => products,
  ({ minPrice }) => minPrice,
  ({ maxPrice }) => maxPrice,
  ({ discount }) => discount,
  ({ activeCategory }) => activeCategory,
  (products, minPrice, maxPrice, discount, category) =>
    splitEvery(
      itemsPerPage,
      products.filter(item => {
        return (
          (category ? item.category === category : true) &&
          getPrice(item.price) >= minPrice &&
          getPrice(item.price) <= maxPrice * (1 - discount / 100)
        );
      })
    )
);
