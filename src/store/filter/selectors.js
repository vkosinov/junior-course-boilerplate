import { createSelector } from 'reselect';

import { splitEvery } from 'csssr-school-utils';
import { getPrice } from '../../utils';

const itemsPerPage = 4;

export const getActiveCategory = createSelector(
  ({ router }) => router.location.query.category,
  category => category
);

export const getActivePage = createSelector(
  ({ router }) => router.location.query.page,
  page => page
);

export const getFilteredProduct = createSelector(
  ({ filter }) => filter.products,
  ({ filter }) => filter.minPrice,
  ({ filter }) => filter.maxPrice,
  ({ filter }) => filter.discount,
  getActiveCategory,
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
