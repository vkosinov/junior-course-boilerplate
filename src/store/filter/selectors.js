import { createSelector } from 'reselect';

import { splitEvery } from 'csssr-school-utils';
import { getPrice } from '../../utils';

const itemsPerPage = 4;

export const getFilteredProduct = createSelector(
  ({ products }) => products,
  ({ filter }) => filter.minPrice,
  ({ filter }) => filter.maxPrice,
  ({ filter }) => filter.discount,
  ({ router }) => router.location.query.category,
  (products, minPrice, maxPrice, discount, category) => {
    return splitEvery(
      itemsPerPage,
      products.filter(item => {
        return (
          (category ? item.category === category : true) &&
          getPrice(item.price) >= minPrice &&
          getPrice(item.price) <= maxPrice * (1 - discount / 100)
        );
      })
    );
  }
);
