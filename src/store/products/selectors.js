import { createSelector } from 'reselect';
import { splitEvery } from 'csssr-school-utils';

const itemsPerPage = 6;

export const getActiveCategory = createSelector(
  ({ router }) => router.location.query.category,
  category => category
);

export const getFilteredProduct = createSelector(
  ({ products }) => products.items,
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
          item.price >= minPrice &&
          item.price <= maxPrice * (1 - discount / 100)
        );
      })
    );
  }
);
